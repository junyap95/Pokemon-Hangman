import { createSlice } from "@reduxjs/toolkit";
export const WRONG_GUESS_LIMIT = 6;
export const guessesSlice = createSlice({
  name: "guesses",

  initialState: {
    answer: "",
    correctGuesses: [],
    wrongGuesses: [],
    correctCount: 0,
    errorCount: 0,
  },

  reducers: {
    // from API
    updateAnswer: (state, action) => {
      state.answer = action.payload;
    },

    // register each correct alphabet to the store state
    updateCorrect: (state, action) => {
      const correctGuess = action.payload;
      const copyOfArray = [...state.correctGuesses, correctGuess];
      state.correctGuesses = copyOfArray;
    },

    // register each wrong alphabet to the store state
    updateWrong: (state, action) => {
      const wrongGuess = action.payload;
      const copyOfArray = [...state.wrongGuesses, wrongGuess];
      state.wrongGuesses = copyOfArray;
    },

    updateErrorCount: (state) => {
      state.errorCount++;
    },

    updateCorrectCount: (state) => {
      state.correctCount++;
    },
  },
});

export const {
  updateAnswer,
  updateCorrect,
  updateWrong,
  updateErrorCount,
  updateCorrectCount,
} = guessesSlice.actions;

export default guessesSlice.reducer;
