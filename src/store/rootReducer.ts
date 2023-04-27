import { combineReducers } from '@reduxjs/toolkit';
import walletSlice from './slices/wallet';

const rootReducer = combineReducers({
  wallet: walletSlice.reducer,
});

export default rootReducer;
