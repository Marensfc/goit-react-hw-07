import { createSlice } from "@reduxjs/toolkit";

export const filtersSlice = createSlice({
  name: "filters",
  initialState: { name: "" },
  reducers: {
    setFilters: (state, action) => {
      return {
        ...state,
        name: action.payload,
      };
    },
  },
});

export const { setFilters } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
