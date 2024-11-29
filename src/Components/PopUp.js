import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementCatchCounter, WRONG_GUESS_LIMIT } from "../store/guesses";
import WinModal from "./WinModal";
import LoseModal from "./LoseModal";

function PopUp() {
  const dispatch = useDispatch();
  const correctCount = useSelector((state) => state.guesses.correctCount);
  const errorCount = useSelector((state) => state.guesses.errorCount);
  const answer = useSelector((state) => state.guesses.answer);

  const answerArr = answer.split("");
  const uniqueLettersFromAnswer = answerArr.filter((element, index) => {
    return answerArr.indexOf(element) === index;
  });

  const hasWon =
    errorCount < WRONG_GUESS_LIMIT &&
    correctCount === uniqueLettersFromAnswer.length &&
    correctCount !== 0;

  const hasLost = errorCount >= WRONG_GUESS_LIMIT;

  useEffect(() => {
    if (hasWon) {
      dispatch(incrementCatchCounter());
    }
  }, [hasWon, dispatch]);

  if (hasLost) {
    return <LoseModal show={true} />;
  }

  if (hasWon) {
    return <WinModal show={true} />;
  }

  return null; // or some other JSX if needed
}

export default PopUp;
