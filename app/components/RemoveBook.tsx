import React from "react";
import { removeBook } from "@/lib/store/bookSlice";
import { useAppDispatch } from "@/lib/store/hooks";
import { IoRemoveCircleOutline } from "react-icons/io5";

const RemoveBook = ({ id }: { id: number }) => {
  const dispatch = useAppDispatch();
  const handleRemove = () => {
    dispatch(removeBook(id));
  };
  return (
    <button
      onClick={handleRemove}
      className="flex flex-row gap-2 items-center justify-end"
    >
      <IoRemoveCircleOutline />{" "}
      <span className="hidden md:inline-block">Remove</span>
    </button>
  );
};

export default RemoveBook;
