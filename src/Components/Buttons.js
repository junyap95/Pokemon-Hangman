import { useSelector } from "react-redux";
import SingleBtn from "./SingleBtn";
import { QWERTY_LAYOUT } from "utils/constants";

function Buttons() {
  const loading = useSelector((state) => state.guesses.loading);

  return (
    <div className="buttons-box" style={{ pointerEvents: loading ? "none" : "auto" }}>
      {QWERTY_LAYOUT.map((row, rowIndex) => (
        <div key={rowIndex} className={`row-${rowIndex + 1} `}>
          {row.map((item, index) => (
            <SingleBtn key={index} item={item} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Buttons;
