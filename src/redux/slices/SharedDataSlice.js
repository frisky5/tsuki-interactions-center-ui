import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userProfile: {},
  authenticated: false,
  authenticationFailed: false,
};

const SharedDataSlice = createSlice({
  name: "sharedData",
  initialState,
  reducers: {
    setUserProfle(state, action) {
      state.userProfile = action.payload;
    },
    setAuthenticated(state, action) {
      state.authenticated = action.payload;
    },
    setAuthenticationFailed(state, action) {
      state.authenticationFailed = action.payload;
    },
  },
});

export const { setUserProfle, setAuthenticated, setAuthenticationFailed } =
  SharedDataSlice.actions;
export default SharedDataSlice.reducer;
