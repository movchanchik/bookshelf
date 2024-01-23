import { BookType } from "@/app/interfaces/interfaces";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: { type: string; isShow: boolean; book: BookType | null } = {
  type: "new",
  isShow: false,
  book: null,
};

const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    show: (state) => {
      state.isShow = true;
    },
    hide: (state) => {
      state.isShow = false;
    },
    editBook: (state, action: PayloadAction<BookType>) => {
      state.book = action.payload;
    },
    updateType: (state, action: PayloadAction<string>) => {
      state.type = action.payload;
    },
  },
});

export const { show, hide, editBook, updateType } = popupSlice.actions;
export default popupSlice.reducer;
