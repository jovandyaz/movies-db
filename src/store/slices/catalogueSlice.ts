import { nowPlayingUri } from "@/services/urls";
import { createSlice } from "@reduxjs/toolkit";

interface CatalogueState {
  catalogueTopic: string;
}

const initialState: CatalogueState = {
  catalogueTopic: nowPlayingUri,
};

const catalogueSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCatalogueTopic: (state, action) => {
      state.catalogueTopic = action.payload;
    },
  },
});

export const { setCatalogueTopic } = catalogueSlice.actions;
export default catalogueSlice.reducer;
