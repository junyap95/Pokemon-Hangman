import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { WRONG_GUESS_LIMIT } from "../store/guesses";
import defaultImg from "../images/state5.GIF";
import error1 from "../images/state6.GIF";
import error2 from "../images/state7.GIF";
import error3 from "../images/state8.GIF";
import error4 from "../images/state9.GIF";
import error5 from "../images/state10.gif";
import error6 from "../images/state11.GIF";

// images
const visualsArr = [error1, error2, error3, error4, error5, error6];

function Visuals() {
  // user error count registered in store
  const errorCount = useSelector((state) => state.guesses.errorCount);

  // usestate and setstate to change image according to guesses remaining
  const [visuals, setVisuals] = useState(defaultImg);

  // whenever errorCount updates in store, this runs
  useEffect(() => {
    for (let i = 0; i <= WRONG_GUESS_LIMIT; i++) {
      if (errorCount === i + 1) {
        setVisuals(visualsArr[i]);
      }
    }
  }, [errorCount]);

  return (
    <div className="visuals">
      <img src={visuals} alt="visual" />
    </div>
  );
}
export default Visuals;
