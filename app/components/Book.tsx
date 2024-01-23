import React from "react";
import { BookType } from "../../app/interfaces/interfaces";
import RemoveBook from "./RemoveBook";
import { useAppDispatch } from "@/lib/store/hooks";
import { show, editBook, updateType } from "@/lib/store/popupSlice";

const Book = ({ book }: { book: BookType }) => {
  const dispatch = useAppDispatch();

  const handleUpdate = () => {
    dispatch(updateType("update"));
    dispatch(editBook(book));
    dispatch(show());
  };
  return (
    <div className="flex justify-between items-center bg-gray-100 hover:bg-gray-200 text-gray-800 p-4">
      <div className="w-full flex" onClick={handleUpdate}>
        <div className="font-bold w-10/12 md:w-3/12">{book.name}</div>
        <div className="font-bold w-4/12 hidden md:inline-block">
          {book.description}
        </div>
        <div className="text-center w-2/12 hidden md:inline-block">
          {book.price}
        </div>
        <div className="text-center w-3/12 hidden md:inline-block">
          {book.category}
        </div>
      </div>
      <div className=" w-2/12 md:w-1/12 self-start flex justify-end">
        <RemoveBook id={book.id} />
      </div>
    </div>
  );
};

export default Book;
