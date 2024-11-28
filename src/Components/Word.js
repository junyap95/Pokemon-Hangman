import { useSelector } from "react-redux";
import { useContext } from "react";
import AppContext from "AppContext";

export default function Word() {
  const { pokemonData } = useContext(AppContext);
  const correctGuesses = useSelector((state) => state.guesses.correctGuesses);
  const wordArr = !!pokemonData.name ? pokemonData.name.split("") : [];

  return (
    <div className="word-box">
      {wordArr.map((char, index) => {
        return correctGuesses.includes(char) ? (
          <div key={index}>{char}</div>
        ) : (
          <div key={index}>_ </div>
        );
      })}
    </div>
  );
}
