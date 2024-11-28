import { createContext, useState, useEffect, useCallback } from "react";
import { replace } from "lodash";
import { updateAnswer } from "./store/guesses";
import { useDispatch } from "react-redux";
const ENVIRONMENT = process.env.NODE_ENV;
console.log(ENVIRONMENT);
const URL = ENVIRONMENT === "production" ? "https://pokeapi.co/api/v2" : "";

const KANTO_POKE_COUNT = 251;
const AppContext = createContext();
export function AppProvider({ children }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState({});
  const loadingSetter = useCallback((bool) => {
    setLoading(bool);
  }, []);

  useEffect(() => {
    const fetchWord = async () => {
      try {
        const randomId = Math.floor(Math.random() * KANTO_POKE_COUNT) + 1;
        const response = await fetch(`${URL}/pokemon/${randomId}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        const POKEMON = await response.json();
        const capitalWord = replace(POKEMON.name, /[^a-zA-Z]/g, "").toUpperCase();
        const isNidoran = capitalWord.includes("NIDORAN");

        const randomNumber = 1 + Math.floor(Math.random() * 100);
        const isShiny = randomNumber <= 15;
        return {
          name: isNidoran ? capitalWord.slice(0, -1) : capitalWord,
          sprite: isShiny ? POKEMON.sprites.front_shiny : POKEMON.sprites.front_default,
          back_sprite: isShiny ? POKEMON.sprites.back_shiny : POKEMON.sprites.back_default,
          anim_sprite: isShiny
            ? POKEMON.sprites.other.showdown.front_shiny
            : POKEMON.sprites.other.showdown.front_default,
          shiny: isShiny,
        };
      } catch (error) {
        console.error(error);
      }
    };
    // calling the async function
    fetchWord().then((data) => {
      setTimeout(() => {
        setPokemonData(data);
        dispatch(updateAnswer(data.name));
        setLoading(false);
      }, 1000);
    });
  }, [dispatch]);

  return (
    <AppContext.Provider value={{ loading, loadingSetter, pokemonData }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
