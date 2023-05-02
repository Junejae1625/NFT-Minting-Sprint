import { combineReducers } from '@reduxjs/toolkit';
import resultSlice from './slices/result';
import walletSlice from './slices/wallet';

const rootReducer = combineReducers({
  wallet: walletSlice.reducer,
  result: resultSlice.reducer,
});

export default rootReducer;
