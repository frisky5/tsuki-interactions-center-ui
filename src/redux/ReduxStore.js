import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import SharedDataSlice from "./slices/SharedDataSlice";
import AgentDataSlice from "./slices/AgentDataSlice";
const reducer = combineReducers({
  sharedData: SharedDataSlice,
  agentData: AgentDataSlice,
});

const ReduxStore = configureStore({
  reducer,
});

export default ReduxStore;
