import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import error6 from "../images/state11.GIF";

// same concept as WinModal
function LoseModal(props) {
  const answer = useSelector((state) => state.guesses.answer);
  const gameOverImg = error6;
  const handleRestart = () => {
    window.location.reload(true);
  };
  return (
    <>
      <Modal
        show={props.show}
        onHide={handleRestart}
        backdrop="static"
        keyboard={false}

      >
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "teal" }}>
            Oh No... Out of Guesses!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
            style={{ background: "white", border: "none" }}
        >
          <div className="lose-visual">
            <div>
              <img src={gameOverImg} alt="clipart-hangman"/>
            </div>
            <div className="lose-message">
            You're a disappointment! The answer is
              <div className="lose-reveal-ans">
                {answer}!
              </div>
            </div>

         </div>

        </Modal.Body>
        <Modal.Footer
          // style={{ color: "teal", background: "#fafaff", size: "large" }}
        >
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
