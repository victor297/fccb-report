import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));

      const expirationTime = new Date().getTime() + 5 * 60 * 60 * 1000; // 5 hours
      localStorage.setItem("expirationTime", expirationTime);
    },

    logout: (state) => {
      state.userInfo = null;
      localStorage.clear();
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;

export const checkExpiration = () => (dispatch) => {
  const expirationTime = JSON.parse(localStorage.getItem("expirationTime"));
  const currentTime = new Date().getTime();

  const date = new Date(expirationTime); // Convert to milliseconds by multiplying by 1000
  const date1 = new Date(currentTime); // Convert to milliseconds by multiplying by 1000
  console.log(date.toString(), date1.toString());
  if (expirationTime && currentTime > expirationTime) {
    dispatch(logout()); // Dispatch logout action if the session has expired
  }
};
