// store/index.js
import { configureStore } from '@reduxjs/toolkit';
import popupReducer from './PopupSlice';

export const store = configureStore({
  reducer: {
    popup: popupReducer,
  },
});
