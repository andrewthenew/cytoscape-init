import { configureStore } from '@reduxjs/toolkit';
import { appSlice } from './app-slice';


const reducer = {
  appNode: appSlice.reducer,
};

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;

export const { setAllData } = appSlice.actions;
