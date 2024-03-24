import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

// same concept as WinModal
function LoseModal(props) {
  const answer = useSelector((state) => state.guesses.answer);
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
          style={{ color: "#fafaff", background: "teal", size: "large" }}
        >
          You're a dissapointment! The answer is {answer}!
        </Modal.Body>
        <Modal.Footer
          style={{ color: "teal", background: "#fafaff", size: "large" }}
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
