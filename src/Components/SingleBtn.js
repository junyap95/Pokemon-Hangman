import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  updateCorrect,
  updateErrorCount,
  updateWrong,
  updateCorrectCount,
} from "../store/guesses";

function SingleBtn(props) {
  // select the current answer from store
  const correctAnswer = useSelector((state) => state.guesses.answer);
  const dispatch = useDispatch();
  const [disable, setDisable] = useState(false);
  const [btnClicked, setBtnClicked] = useState("btn-default");

  const handleClick = (e) => {
    // disable the button whenever clicked
    setDisable(true);

    // usestate to change CSS class
    setBtnClicked("btn-clicked");

    // this returns boolean
    const isCorrect = correctAnswer.includes(e.target.value);

    // if button click matches any of the word's alphabets, update that button value to store correct guesses, and vice versa
    if (isCorrect) {
      dispatch(updateCorrect(e.target.value));
      dispatch(updateCorrectCount());
    } else {
      dispatch(updateWrong(e.target.value));
      dispatch(updateErrorCount());
    }
  };

  return (
    <button
      className={btnClicked}
      disabled={disable}
      value={props.item}
      onClick={handleClick}
    >
      {props.item}
    </button>
  );
}
export default SingleBtn;
