import { configureStore } from "@reduxjs/toolkit";
import guessesReducer from "./guesses";

export default configureStore({
  reducer: {
    guesses: guessesReducer,
  },
});