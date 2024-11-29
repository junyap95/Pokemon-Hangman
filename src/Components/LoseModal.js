import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { refreshState, refreshCatchCounter } from "store/guesses";
import { useEffect, useState } from "react";

// same concept as WinModal
function LoseModal(props) {
  const dispatch = useDispatch();
  const pokemonData = useSelector((state) => state.guesses.pokemonData);
  const answer = useSelector((state) => state.guesses.answer);
  const catchCount = useSelector((state) => state.guesses.catchCounter);

  const handleRestart = () => {
    dispatch(refreshState());
    dispatch(refreshCatchCounter());
  };

  const [isRevealed, setIsReveal] = useState(false);
  useEffect(() => {
    setTimeout(() => setIsReveal(true), 2500);
  });

  return (
    <Modal centered show={props.show} onHide={handleRestart} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title style={{ color: "teal", fontSize: "0.8em" }}>
          Oh No... The Pokémon Ran Away!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{
          background: "#f5f5f5",
          height: "30vh",
          display: "flex",
        }}
      >
        <div className="lose-visual">
          <div>
            {!isRevealed ? (
              <img
                className="ran-away-pokemon"
                src={pokemonData.back_sprite}
                alt="pokemon back sprite"
              />
            ) : (
              <img
                className="revealed-pokemon"
                src={pokemonData.sprite}
                alt="pokemon back sprite"
              />
            )}
          </div>
          <div className="answer-box">
            <div
              style={{
                wordWrap: "break-word",
                width: "100%",
              }}
            >
              The answer is <u style={{ fontWeight: "bold" }}>{answer}</u>!
            </div>
            {pokemonData.shiny && (
              <small>
                It's a <span>shiny</span>!
              </small>
            )}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ fontSize: "0.7em", color: "teal" }}>Streak: {catchCount}</div>
        <Button
          style={{
            color: "#fafaff",
            background: "teal",
            border: "none",
            fontSize: "0.75em",
          }}
          variant="primary"
          onClick={handleRestart}
        >
          Go Again!
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default LoseModal;
