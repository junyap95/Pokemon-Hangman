import { useSelector } from "react-redux";
import { useContext } from "react";
import AppContext from "AppContext";

function Visuals() {
  const { loading, pokemonData } = useContext(AppContext);
  const visual = pokemonData.sprite;
  const wordCount = useSelector((state) => state.guesses.answer.length);
  const answer = useSelector((state) => state.guesses.answer);
  const totalLetters = new Set();
  for (let i = 0; i < wordCount; i++) {
    totalLetters.add(answer[i]);
  }
  const correctCount = useSelector((state) => state.guesses.correctCount);
  const percentageReveal = ((correctCount / totalLetters.size) * 0.3).toFixed(2);

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
          <img className="pokeball" src={"/poke-ball.png"} alt="pokeball" />
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
