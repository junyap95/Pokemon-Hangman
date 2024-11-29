import Header from "./Header";
import Word from "./Word";
import Buttons from "./Buttons";
import PopUp from "./PopUp";
import Visuals from "./Visuals";
import WrongLetters from "./WrongLetters";
import CatchCount from "./CatchCount";

export default function HomePageWrapper() {
  return (
    <div className={`home-page-wrapper`}>
      <div className="title-visual">
        <Header />
        <Visuals />
      </div>
      <div className="section-center">
        <Word />
        <Buttons />
        <CatchCount />
      </div>
      <PopUp />
      <WrongLetters />
    </div>
  );
}
