import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";

function WinModal(props) {
  const answer = useSelector((state) => state.guesses.answer);

  // on button click i.e. play again the game resets
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
          <Modal.Title style={{ color: "teal" }}>Congratulations!</Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{ color: "#f9ffd7", background: "teal", size: "large" }}
        >
          You win! The answer is {answer}!
        </Modal.Body>
        <Modal.Footer
          style={{ color: "teal", background: "#f9ffd7", size: "large" }}
        >
          <Button
            style={{ color: "#f9ffd7", background: "teal", border: "none" }}
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

export default WinModal;
