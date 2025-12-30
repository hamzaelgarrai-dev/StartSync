import { createSlice } from '@reduxjs/toolkit';

const isBrowser = typeof window !== 'undefined' && window.localStorage;

const storedUser = isBrowser ? JSON.parse(localStorage.getItem('user')) : null;
const storedToken = isBrowser ? localStorage.getItem('token') : null;

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
