"use client";

import React, { useState } from "react";
import Popup from "./Popup";
import { useAppDispatch } from "@/lib/store/hooks";
import { show, updateType } from "@/lib/store/popupSlice";

const AddBook = () => {
  const dispatch = useAppDispatch();

  const handleAddBook = () => {
    dispatch(updateType("new"));
    dispatch(show());
  };
  return (
    <div className="container m-auto p-2 flex justify-end">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleAddBook}
      >
        Add Book
      </button>
      <Popup />
    </div>
  );
};

export default AddBook;
