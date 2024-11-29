import { useSelector } from "react-redux";
import { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { POKE_COUNT, URL } from "../utils/constants.js";
import { updateLoading, updatePokemonData, updateAnswer, updateRestart } from "store/guesses";

function Visuals() {
  const dispatch = useDispatch();
  const wordCount = useSelector((state) => state.guesses.answer.length);
  const pokemonData = useSelector((state) => state.guesses.pokemonData);
  const answer = useSelector((state) => state.guesses.answer);
  const loading = useSelector((state) => state.guesses.loading);
  const restart = useSelector((state) => state.guesses.restart);

  const visual = pokemonData.sprite;
  const totalLetters = new Set();
  for (let i = 0; i < wordCount; i++) {
    totalLetters.add(answer[i]);
  }
  const correctCount = useSelector((state) => state.guesses.correctCount);
  const percentageReveal = ((correctCount / totalLetters.size) * 0.3).toFixed(2);
  const fetchWord = useCallback(async () => {
    try {
      const randomId = Math.floor(Math.random() * POKE_COUNT) + 1;
      const response = await fetch(`${URL}/pokemon/${randomId}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const POKEMON = await response.json();
      const capitalWord = POKEMON.name.replace(/[^a-zA-Z]/g, "").toUpperCase();
      const isNidoran = capitalWord.includes("NIDORAN");

      const randomNumber = 1 + Math.floor(Math.random() * 100);
      const isShiny = randomNumber <= 8;
      return {
        name: isNidoran ? capitalWord.slice(0, -1) : capitalWord,
        sprite: isShiny ? POKEMON.sprites.front_shiny : POKEMON.sprites.front_default,
        back_sprite: isShiny
          ? POKEMON.sprites.other.showdown.back_shiny
          : POKEMON.sprites.other.showdown.back_default,
        anim_sprite: isShiny
          ? POKEMON.sprites.other.showdown.front_shiny
          : POKEMON.sprites.other.showdown.front_default,
        shiny: isShiny,
      };
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    if (restart || loading) {
      fetchWord().then((data) => {
        setTimeout(() => {
          dispatch(updatePokemonData(data));
          dispatch(updateAnswer(data.name));
          dispatch(updateLoading(false));
          dispatch(updateRestart(false)); // Reset restart state after fetching
        }, 500);
      });
    }
  }, [dispatch, restart, fetchWord, loading]);

  return (
    <div
      style={{
        position: "relative",
        height: "25svh",
        border: "none 2px teal",
        borderStyle: "solid none",
      }}
    >
      <div className="visuals">
        {loading ? (
          <img className="pokeball loading" src={"/poke-ball.png"} alt="pokeball" />
        ) : (
          <img
            style={{
              filter: `brightness(${percentageReveal}) saturate(0)`,
            }}
            className="pokemon"
            src={visual}
            alt="visual"
          />
        )}
      </div>
    </div>
  );
}
export default Visuals;
