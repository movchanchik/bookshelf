import React from "react";
import Form from "./Form";
import { BookType } from "../interfaces/interfaces";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { IoCloseSharp } from "react-icons/io5";
import { hide } from "@/lib/store/popupSlice";
import { FormTypeEnum } from "../enums";

interface PopupProps {
  book: BookType | null;
}

const Popup = () => {
  const isShowPopup = useAppSelector((state) => state.popup.isShow);
  const dispatch = useAppDispatch();
  const type = useAppSelector((state) => state.popup.type);
  return isShowPopup ? (
    <>
      <div
        className="absolute bg-white  bg-opacity-80 top-0 right-0 bottom-0 left-0 z-10"
        onClick={() => dispatch(hide())}
      ></div>
      <div className="absolute shadow-md top-1/2 -mt-48 left-0 right-0 m-auto w-80 min-h-max p-4 bg-[#d4e6fd]  z-20">
        <h2 className="text-xl font-bold mb-4 text-gray-800 ">
          {type === FormTypeEnum.NEW ? "Add Book" : "Update Book"}
        </h2>
        <button
          className="absolute right-5 top-5 text-gray-800 "
          onClick={() => dispatch(hide())}
        >
          <IoCloseSharp size={20} />
        </button>
        <Form />
      </div>
    </>
  ) : null;
};

export default Popup;
