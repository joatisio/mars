import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  access_token: '',
  refresh_token: '',
};

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setUserAuth: (state, action: PayloadAction<Record<string, string>>) => {
      const { access_token, refresh_token } = action.payload;
      state.access_token = access_token;
      state.refresh_token = refresh_token;
    },
    clearAuth: (state) => {
      state.access_token = '';
      state.refresh_token = '';
    },
  },
});

export const { setUserAuth, clearAuth } = authSlice.actions;
export default authSlice.reducer;
