import SingleBtn from "./SingleBtn";
import { useSelector } from "react-redux";
import { WRONG_GUESS_LIMIT } from "../store/guesses";
import { useEffect } from "react";

// generate A-Z using charcode, return an array
function generateAlphabets() {
  const alphabets = [];
  for (let i = 65; i <= 90; i++) {
    alphabets.push(String.fromCharCode(i));
  }
  return alphabets;
}
const alphabetsArr = generateAlphabets();

// this Component passes props to the SingleBtn Component
function Buttons() {
  const errorCount = useSelector((state) => state.guesses.errorCount);

  // disable the button when user makes max number of errors
  useEffect(() => {
    if (errorCount >= WRONG_GUESS_LIMIT) {
      // when wrong guess limit is reached, disable button
    }
  }, [errorCount]);

  return (
    // A number of components should be rendered using the array.Map() method. Each component rendered in this way should have a key that uniquely identifies it.
    <div className="buttons-box">
      <div>
        {alphabetsArr.map((item, index) => {
          return <SingleBtn key={index} item={item} />;
        })}
      </div>
    </div>
  );
}

export default Buttons;
