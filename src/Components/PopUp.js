import { useSelector } from "react-redux";
import { WRONG_GUESS_LIMIT } from "../store/guesses";
import WinModal from "./WinModal";
import LoseModal from "./LoseModal";

function PopUp() {
  const correctCount = useSelector((state) => state.guesses.correctCount);
  const errorCount = useSelector((state) => state.guesses.errorCount);
  const answer = useSelector((state) => state.guesses.answer);

  // to get an array of letters from the answer word
  const answerArr = answer.split("");

  // to create a new array where duplicate letters excluded
  // this is also the winning condition: the number of guess required
  let uniqueLettersFromAnswer = answerArr.filter((element, index) => {
    return answerArr.indexOf(element) === index;
  });

  // losing condition
  if (errorCount >= WRONG_GUESS_LIMIT) {
    return (
      <div>
        <LoseModal show={true} />
      </div>
    );
  }
  // winning condition
  if (
    errorCount < WRONG_GUESS_LIMIT &&
    correctCount === uniqueLettersFromAnswer.length &&
    correctCount !== 0
  ) {
    return (
      <div>
        <WinModal show={true} />
      </div>
    );
  }
}

export default PopUp;
