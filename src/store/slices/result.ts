/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

interface IResult {
  data: string;
  hash: string;
  nonce: string;
  to: string;
}

const initialResultState = {
  data: '',
  hash: '',
  nonce: '',
  to: '',
} as IResult;

const resultSlice = createSlice({
  name: 'result',
  initialState: initialResultState,
  reducers: {
    result: (state, action) => {
      state.data = action.payload.data;
      state.hash = action.payload.hash;
      state.nonce = action.payload.nonce;
      state.to = action.payload.to;
    },
  },
});

export const { result } = resultSlice.actions;

export default resultSlice;
