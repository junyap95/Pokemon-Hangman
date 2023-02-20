import "./App.css";
import Header from "./Components/Header";
import Word from "./Components/Word";
import Buttons from "./Components/Buttons";
import PopUp from "./Components/PopUp";
// import Visuals from "./Components/Visuals";
import WrongLetters from "./Components/WrongLetters";

function App() {
  return (
    <div className="App">
      <Header />

      <Word />

      <Buttons />

      <PopUp />

      <WrongLetters />
    </div>
  );
}

export default App;
