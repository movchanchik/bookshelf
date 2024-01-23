"use client";
import { RootState } from "../../lib/store/store";
import React, { useRef } from "react";
import { useSelector } from "react-redux";
import Book from "./Book";
import { BookType } from "../interfaces/interfaces";

const BookList = () => {
  const books = useSelector((state: RootState) => state.book);
  const initialized = useRef(false);
  if (!initialized.current) {
    initialized.current = true;
  }

  return (
    <div className="container m-auto p-2">
      {books.bookList.length > 0 ? (
        <>
          <div className="flex justify-between items-center bg-blue-500 text-white p-4">
            <div className="font-bold w-11/12 md:w-3/12">Book Name</div>
            <div className="font-bold w-4/12 hidden md:inline-block">
              Description
            </div>
            <div className="font-bold text-center w-2/12 hidden md:inline-block">
              Price
            </div>
            <div className="font-bold text-center w-3/12 hidden md:inline-block">
              Category
            </div>
            <div className="font-bold text-right w-2/12 md:w-1/12">Actions</div>
          </div>
          {books.bookList.map((book: BookType) => (
            <Book key={book.id} book={book} />
          ))}
        </>
      ) : (
        <div>
          <div className="flex justify-center items-center h-full">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Your book list is empty!
              </h2>
              <p className="text-gray-600">
                Start adding books to build your collection.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookList;
