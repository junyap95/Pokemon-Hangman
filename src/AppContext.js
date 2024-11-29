import { createContext } from "react";
const correctAns = require("./assets/crisp-tap.mp3");
const wrongAns = require("./assets/wrong_answer_tone.mp3");
const AppContext = createContext();
export function AppProvider({ children }) {
  const correctAudio = new Audio(correctAns);
  const wrongAudio = new Audio(wrongAns);

  return <AppContext.Provider value={{ correctAudio, wrongAudio }}>{children}</AppContext.Provider>;
}

export default AppContext;
