import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateCorrect, updateErrorCount, updateWrong, updateCorrectCount } from "../store/guesses";

function SingleBtn(props) {
  const dispatch = useDispatch();
  const correctAnswer = useSelector((state) => state.guesses.answer);
  const restart = useSelector((state) => state.guesses.restart);
  const [btnClicked, setBtnClicked] = useState(false);

  useEffect(() => {
    if (restart) setBtnClicked(false);
  }, [restart]);

  const handleClick = (e) => {
    setBtnClicked(true);
    const isCorrect = correctAnswer.includes(e.target.value);
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
      className={`btn-default ${btnClicked ? "clicked" : ""}`}
      disabled={btnClicked}
      value={props.item}
      onClick={handleClick}
    >
      {props.item}
    </button>
  );
}
export default SingleBtn;
