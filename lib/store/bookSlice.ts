import { books } from "@/app/static/booksList";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BookType, BookShelf } from "../../app/interfaces/interfaces";

const initialState: BookShelf = books;

const bookSlice = createSlice({
  name: "booklist",
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<BookType>) => {
      state.bookList.push(action.payload);
    },
    removeBook: (state, action: PayloadAction<number>) => {
      state.bookList = state.bookList.filter(
        (book) => book.id !== action.payload
      );
    },
    updateBook: (state, action: PayloadAction<BookType>) => {
      const findIndex = state.bookList.findIndex(
        (book) => book.id === action.payload.id
      );
      if (findIndex !== -1) {
        state.bookList === state.bookList.splice(findIndex, 1, action.payload);
      }
    },
  },
});

export const { addBook, removeBook, updateBook } = bookSlice.actions;
export default bookSlice.reducer;
