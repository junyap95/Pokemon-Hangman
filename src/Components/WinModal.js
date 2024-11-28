import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useContext } from "react";
import AppContext from "AppContext";

function WinModal(props) {
  const { pokemonData } = useContext(AppContext);
  const answer = pokemonData.name;
  // on button click i.e. play again the game resets
  const handleRestart = () => {
    window.location.reload(true);
  };
  return (
    <>
      <Modal centered show={props.show} onHide={handleRestart} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "teal" }}>Congratulations!</Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            color: "#fafaff",
            background: "teal",
            size: "large",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "30vh",
            justifyContent: "space-between",
            gap: "1em",
          }}
        >
          <div>
            <span style={{ color: "gold" }}>{pokemonData.shiny ? "Shiny" : ""}</span> {answer} was
            caught!
          </div>

          <div className="animated-win-modal">
            <img alt="answer reveal" src={pokemonData.anim_sprite} />
          </div>
        </Modal.Body>
        <Modal.Footer
          style={{
            color: "teal",
            background: "#fafaff",
            size: "large",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
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

export default WinModal;
