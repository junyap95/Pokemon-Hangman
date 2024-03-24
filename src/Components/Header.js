import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import Visuals from "./Visuals";
// bootstrap component
const popover = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">How To Play</Popover.Header>
    <Popover.Body>
      <ul>
        <li>
          A secret word is chosen, and players try to guess the letters in the
          word.
        </li>
        <li>
          The player must guess the letters one at a time, and for each
          incorrect guess, a body part of a stick figure is drawn.
        </li>
        <li>
          The player loses when the stick figure is completed, or they run out
          of guesses.
        </li>
        <li>
          The player can make a guess by typing a letter on their keyboard or
          clicking/tapping a letter on the screen.
        </li>
        <li>
          The player wins the game by guessing all the letters in the word
          before the stick figure is completed.
        </li>
      </ul>
      And there you go! <strong>Good Luck and Have Fun!</strong>
    </Popover.Body>
  </Popover>
);

// displays header and help button
function Header() {
  return (
    <div className="d-flex">
      <div>
        <Visuals />
      </div>
      <div>
        <div>HANGMAN</div>
      </div>
      <div>
        {/* bootstrap component - help button*/}
        <OverlayTrigger
          trigger={["hover", "focus"]}
          placement="bottom"
          overlay={popover}
          style={{ color: "teal" }}
        >
          <Button
            style={{ color: "#fafaff", background: "teal" }}
            variant="success"
          >
            Need Help?
          </Button>
        </OverlayTrigger>
      </div>
    </div>
  );
}

export default Header;
