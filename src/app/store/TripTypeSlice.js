// store/TripTypeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const tripTypeSlice = createSlice({
  name: 'tripType',
  initialState: {
    value: 'Round-Way',
  },
  reducers: {
    setTravelTripType: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setTravelTripType } = tripTypeSlice.actions;
export const selectTripType = (state) => state.tripType.value;
export default tripTypeSlice.reducer;
