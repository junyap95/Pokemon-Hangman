// @ts-ignore
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
    loading: true,
    pokemonData: {},
    restart: false,
    catchCounter: 0,
  },

  reducers: {
    updateAnswer: (state, action) => {
      state.answer = action.payload;
    },

    updateRestart: (state, action) => {
      state.restart = action.payload;
    },

    updatePokemonData: (state, action) => {
      state.pokemonData = action.payload;
    },

    updateLoading: (state, action) => {
      state.loading = action.payload;
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

    incrementCatchCounter: (state) => {
      state.catchCounter++;
    },

    refreshCatchCounter: (state) => {
      state.catchCounter = 0;
    },

    refreshState: (state) => {
      state.answer = "";
      state.correctGuesses = [];
      state.wrongGuesses = [];
      state.correctCount = 0;
      state.errorCount = 0;
      state.loading = true;
      state.pokemonData = {};
      state.restart = true;
    },
  },
});

export const {
  updateLoading,
  updateAnswer,
  updateCorrect,
  updateWrong,
  updateErrorCount,
  updateCorrectCount,
  updatePokemonData,
  updateRestart,
  refreshState,
  incrementCatchCounter,
  refreshCatchCounter,
} = guessesSlice.actions;

export default guessesSlice.reducer;
