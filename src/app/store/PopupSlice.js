// store/popupSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  popupOpen: false,
  selectedFlight: null,
};

const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    openPopup: (state, action) => {
      state.popupOpen = true;
      state.selectedFlight = action.payload;
    },
    closePopup: (state) => {
      state.popupOpen = false;
      state.selectedFlight = null;
    },
  },
});

export const { openPopup, closePopup } = popupSlice.actions;

export const selectPopupState = (state) => state.popup;

export default popupSlice.reducer;
