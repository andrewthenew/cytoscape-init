import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  type: null, // node | edge
  data: null,
  edges: null,
};

export const appSlice = createSlice({
  name: 'appNode',
  initialState,
  reducers: {
    setAllData: (state, action) => {
      state.data = action.payload.data;
      state.edges = action.payload.edges;
      state.type = action.payload.type;
    },
  },
});
