import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import AppContext from "AppContext";
import { useContext } from "react";

// same concept as WinModal
function LoseModal(props) {
  const answer = useSelector((state) => state.guesses.answer);
  const { pokemonData } = useContext(AppContext);
  const handleRestart = () => {
    window.location.reload(true);
  };
  return (
    <>
      <Modal centered show={props.show} onHide={handleRestart} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "teal" }}>Oh No... The Pokemon Ran Away!</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ background: "white", border: "none" }}>
          <div className="lose-visual">
            <div>
              <img
                className="ran-away-pokemon"
                src={pokemonData.back_sprite}
                alt="clipart-hangman"
              />
            </div>
            <div className="lose-message">
              Alas! The answer is
              <div className="lose-reveal-ans">{answer}!</div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            style={{ color: "#fafaff", background: "teal", border: "none" }}
            variant="primary"
            onClick={handleRestart}
          >
            Play Again
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LoseModal;
