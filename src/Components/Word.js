import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateAnswer } from "../store/guesses";

// diplays the alphabets chosen by user
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
        const randomword = await response.json();
        // change word to uppercase as our alphabets array are created using lowercase charcode
        const capitalWord = randomword[0].toUpperCase();
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
          <h2 key={index}>{char}</h2>
        ) : (
          <h2 key={index}>_ </h2>
        );
      })}
      <div></div>
    </div>
  );
}
export default Word;
