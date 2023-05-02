/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

interface IWalletState {
  wallet: string;
  address: string;
  network: string | number;
  isConnect: boolean;
}

const initialWalletState = {
  address: '',
} as IWalletState;

const walletSlice = createSlice({
  name: 'wallet',
  initialState: initialWalletState,
  reducers: {
    login: (state, action) => {
      state.address = action.payload.address;
    },
  },
});

export const { login } = walletSlice.actions;

export default walletSlice;
