import { useSelector } from "react-redux";

// a component showing wrong letters guessed and how many guesses left
function WrongLetters() {
  // array of wrong alphabets guessed
  const wrongGuesses = useSelector((state) => state.guesses.wrongGuesses);
  const wrongCount = wrongGuesses.length;

  const handleClick = () => {
    window.location.reload(true);
  };

  // display the wrong letter guessed for each wrong guess
  return (
    <div className="wrong-letters-box">
      <h3>WRONG LETTERS GUESSED:</h3>
      <h3>{wrongGuesses.map((item) => `${item}, `)}</h3>
      <div>{6 - wrongCount} Guesses Left!</div>
      {/* restart button */}
      <button type="button" onClick={handleClick}>
        Restart
      </button>
    </div>
  );
}

export default WrongLetters;
