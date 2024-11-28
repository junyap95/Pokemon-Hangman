import Popover from "react-bootstrap/Popover";
import { useSelector } from "react-redux";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
const popover = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">How To Play</Popover.Header>
    <Popover.Body>
      <ul>
        <li>A secret Pokémon is chosen, and players try to guess the letters in the name.</li>
        <li>
          The player must guess the letters one at a time, and for each incorrect guess, a Pokéball
          is used.
        </li>
        <li>The player loses when all Pokéballs are used.</li>
        <li>
          The player can make a guess by typing a letter on their keyboard or clicking/tapping a
          letter on the screen.
        </li>
        <li>
          The player wins the game by guessing all the letters in the Pokémon's name before all
          Pokéballs are used.
        </li>
      </ul>
      <strong>
        <small>Be the very best like no one ever was!</small>
      </strong>
    </Popover.Body>
  </Popover>
);
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
      <div style={{ fontSize: "1em", display: "flex", alignItems: "center" }}>
        Inventory:
        {Array.apply(null, Array(6 - wrongCount)).map((_, index) => (
          <img
            key={`pokeball-${index}`}
            className="pokeball"
            src={"/poke-ball.png"}
            alt="pokeball"
            style={{ height: "2em", animation: "none" }}
          />
        ))}
      </div>
      <div style={{ display: "flex", gap: "1em" }}>
        <button className="btn-help" onClick={handleClick}>
          Restart
        </button>
        <OverlayTrigger
          trigger={["click"]}
          placement="top"
          overlay={popover}
          style={{ color: "teal" }}
        >
          <button className="btn-help">Need Help?</button>
        </OverlayTrigger>
      </div>
    </div>
  );
}

export default WrongLetters;
