
import { createSlice } from "@reduxjs/toolkit";

const initialState = { username: "", email: "" };

const UserDetailsSlice = createSlice({
  name: "userinfo",
  initialState,
  reducers: {
    setuserinfo: (state, action) => {
      const { username, email } = action.payload;
      state.username = username;
      state.email = email;
    },
  },
});

export const { setuserinfo } = UserDetailsSlice.actions;

export default UserDetailsSlice.reducer;
