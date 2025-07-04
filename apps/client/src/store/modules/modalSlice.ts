import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ModalId = "PLACE_DETAIL" | "CONFIRM_DELETE" | "NONE";

interface ModalState {
  opened: ModalId;
}

const initialState: ModalState = { opened: "NONE" };

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<ModalId>) => {
      state.opened = action.payload;
    },
    closeModal: (state) => {
      state.opened = "NONE";
    },
    toggleModal: (state, action: PayloadAction<ModalId>) => {
      state.opened = state.opened === action.payload ? "NONE" : action.payload;
    },
  },
});

export const { openModal, closeModal, toggleModal } = modalSlice.actions;
export default modalSlice.reducer;
