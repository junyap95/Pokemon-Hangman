import Header from "./Header";
import Word from "./Word";
import Buttons from "./Buttons";
import PopUp from "./PopUp";
import Visuals from "./Visuals";
import WrongLetters from "./WrongLetters";

export default function HomePageWrapper() {
  return (
    <div className="home-page-wrapper">
      <div className="title-visual">
        <Header />
        <Visuals />
      </div>
      <Word />
      <Buttons />
      <PopUp />
      <WrongLetters />
    </div>
  );
}
