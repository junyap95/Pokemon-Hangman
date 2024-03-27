import {useSelector} from "react-redux";

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
            <div>WRONG LETTERS GUESSED:</div>
            <div className="wrong-letter-circle">{wrongGuesses.map((item) => <div>{item}</div>)}</div>
            <div>{6 - wrongCount} Guesses Left!
                <button type="button" onClick={handleClick}>
                    Restart
                </button>
            </div>
            {/* restart button */}

        </div>
    );
}

export default WrongLetters;
