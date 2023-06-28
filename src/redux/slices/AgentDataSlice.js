import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  state: 1,
};

const AgentDataSlice = createSlice({
  name: "agentData",
  initialState,
  reducers: {
    setState(state, action) {
      state.state = action.payload;
    },
  },
});

export const { setState } = AgentDataSlice.actions;
export default AgentDataSlice.reducer;
