import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateAnswer } from "../store/guesses";

// displays the alphabets chosen by user
function Word() {
  const [word, setWord] = useState("");
  const dispatch = useDispatch();
  const correctGuesses = useSelector((state) => state.guesses.correctGuesses);

  // fetch a random word from API
  // runs whenever page renders
  useEffect(() => {
    const fetchWord = async () => {
      try {
        const response = await fetch(
          "https://random-word-api.herokuapp.com/word?lang=en"
        );
        const randomWord = await response.json();
        // change word to uppercase as our alphabets array are created using lowercase charcode
        const capitalWord = randomWord[0].toUpperCase();
        // update state when API fetched
        setWord(capitalWord);
        // update store when API fetched
        dispatch(updateAnswer(capitalWord));
      } catch (error) {
        alert("error");
      }
    };
    // calling the async function
    fetchWord();
  }, [dispatch]);

  // the 'answer' split into array
  const wordArr = word.split("");

  return (
    <div className="word-box">
      {/* char is an alphabet in mapping*/}
      {/* using the array we created from the word fetched, map each alphabet and to the alphabet chosen by user, if they matched, return that alphabet  */}
      {/* A number of components should be rendered using the array.Map() method. Each component rendered in this way should have a key that uniquely identifies it. */}
      {wordArr.map((char, index) => {
        console.log(char);
        return correctGuesses.includes(char) ? (
          <div key={index}>{char}</div>
        ) : (
          <div key={index}>_ </div>
        );
      })}
      <div></div>
    </div>
  );
}
export default Word;
