import { useSelector } from "react-redux";

export default function Word() {
  // const { pokemonData } = useContext(AppContext);
  const pokemonData = useSelector((state) => state.guesses.pokemonData);
  const correctGuesses = useSelector((state) => state.guesses.correctGuesses);
  const wordArr = !!pokemonData.name ? pokemonData.name.split("") : [];

  return (
    <div className={`word-box ${wordArr.length > 10 ? "long-word" : ""}`}>
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
