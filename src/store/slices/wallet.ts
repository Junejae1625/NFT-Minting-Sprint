/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

interface IWalletState {
  wallet: string;
  address: string;
  network: string | number;
  isConnect: boolean;
}

const initialWalletState = {
  wallet: '',
  address: '',
  network: '',
  isConnect: false,
} as IWalletState;

const walletSlice = createSlice({
  name: 'wallet',
  initialState: initialWalletState,
  reducers: {
    login: (state, action) => {
      state.wallet = action.payload.wallet;
      state.address = action.payload.address;
      state.network = action.payload.network;
      state.isConnect = action.payload.isConnect;
    },
    changeAddress: (state, action) => {
      state.address = action.payload.address;
    },
    changeNetwork: (state, action) => {
      state.network = action.payload.network;
    },
    logout: () => initialWalletState,
  },
});

export const { login, changeAddress, changeNetwork, logout } = walletSlice.actions;

export default walletSlice;
