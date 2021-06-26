import { createSlice } from "@reduxjs/toolkit";

const counterState = { counter: 0, show: false };

const counterSlice = createSlice({
  name: "counter",
  initialState: counterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      state.show = !state.show;
    }
  }
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
