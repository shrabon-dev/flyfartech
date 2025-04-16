// store/index.js
import { configureStore } from '@reduxjs/toolkit';
import popupReducer from './PopupSlice';
import tripTypeReducer from './TripTypeSlice';
export const store = configureStore({
  reducer: {
    popup: popupReducer,
    tripType: tripTypeReducer,
  },
});
