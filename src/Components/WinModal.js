import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import { refreshState } from "store/guesses";
import Modal from "react-bootstrap/Modal";

function WinModal(props) {
  const pokemonData = useSelector((state) => state.guesses.pokemonData);
  const dispatch = useDispatch();
  const answer = pokemonData.name;

  const handleRestart = () => {
    dispatch(refreshState());
  };

  return (
    <Modal centered show={props.show} onHide={handleRestart} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title
          style={{
            fontSize: "1em",
            color: "teal",
          }}
        >
          Congratulations!
        </Modal.Title>
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
          fontSize: "0.8em",
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
          style={{ color: "#fafaff", background: "teal", border: "none", fontSize: "0.8em" }}
          variant="primary"
          onClick={handleRestart}
        >
          Next Pokémon
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default WinModal;
