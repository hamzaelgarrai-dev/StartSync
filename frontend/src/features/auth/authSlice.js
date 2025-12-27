import { createSlice } from '@reduxjs/toolkit';

const storedUser = JSON.parse(localStorage.getItem('user'));
const storedToken = localStorage.getItem('token');

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: storedUser||null, token:storedToken||null },
  reducers: {
    setCredentials: (state, action) => {
      const { user, access_token } = action.payload;
      state.user = user;
      state.token = access_token

      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token" , access_token);

    },
    logOut: (state) => {
      state.user = null
      state.token = null
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    },
  },
})

export const { setCredentials, logOut } = authSlice.actions
export const selectCurrentUser = (state) => state.auth.user
export const selectCurrentToken = (state) => state.auth.token
export default authSlice.reducer
