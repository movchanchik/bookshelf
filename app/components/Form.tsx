import { addBook } from "@/lib/store/bookSlice";
import React, { FormEvent, useState } from "react";
import { categories } from "../static/categories";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { generateUniqueId } from "../utils/generateUniqId";
import { hide } from "@/lib/store/popupSlice";
import { updateBook } from "@/lib/store/bookSlice";
import { FormTypeEnum } from "../enums";

const Form = () => {
  const book = useAppSelector((state) => state.popup.book);
  const type = useAppSelector((state) => state.popup.type);
  const dispatch = useAppDispatch();

  const [isSubmit, setSubmit] = useState(false);

  const [formData, setFormData] = useState({
    name: type === FormTypeEnum.UPDATE && book ? book.name : "",
    description: type === FormTypeEnum.UPDATE && book ? book.description : "",
    price: type === FormTypeEnum.UPDATE && book ? book.price : 0,
    category:
      type === FormTypeEnum.UPDATE && book ? book.category : categories[0],
  });

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmit(true);
    if (
      formData.name.trim().length === 0 ||
      formData.description.trim().length === 0 ||
      formData.price < 0
    ) {
      return;
    }

    if (type === FormTypeEnum.UPDATE && book) {
      dispatch(updateBook({ id: book.id, ...formData }));
    } else if (type === FormTypeEnum.NEW) {
      dispatch(addBook({ id: generateUniqueId(), ...formData }));
    }

    setFormData({
      name: "",
      description: "",
      price: 0,
      category: "",
    });
    dispatch(hide());
  };
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-2">
      <div className="flex flex-col">
        <label htmlFor="name" className="text-gray-600">
          Book Name:
        </label>
        <input
          defaultValue={formData.name}
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value });
          }}
          type="text"
          id="name"
          name="name"
          className="rounded-md p-2 bg-white text-gray-800"
        />
        {formData.name.length === 0 && isSubmit && (
          <div className="text-red-500">Name is required</div>
        )}
      </div>
      <div className="flex flex-col">
        <label htmlFor="name" className="text-gray-600 ">
          Description:
        </label>
        <textarea
          defaultValue={formData.description}
          onChange={(e) => {
            setFormData({ ...formData, description: e.target.value });
          }}
          id="description"
          name="description"
          className="rounded-md p-2 bg-white text-gray-800"
        />
        {formData.description.length === 0 && isSubmit && (
          <div className="text-red-500">Description is required</div>
        )}
      </div>
      <div className="flex flex-col">
        <label htmlFor="price" className="text-gray-600">
          Price:
        </label>
        <input
          defaultValue={formData.price}
          type="text"
          id="price"
          name="price"
          pattern="^\d+\.*\d*$"
          onChange={(e) => {
            setFormData({
              ...formData,
              price: +e.target.value,
            });
          }}
          className="rounded-md p-2 bg-white text-gray-800"
        />

        {formData.price < 0 && isSubmit && (
          <div className="text-red-500">Price must be a non-negative value</div>
        )}
      </div>
      <div className="flex flex-col">
        <label htmlFor="category" className="text-gray-600 ">
          Category:
        </label>
        <select
          defaultValue={formData.category}
          id="category"
          name="category"
          className="rounded-md p-2 bg-white text-gray-800"
          onChange={(e) => {
            setFormData({
              ...formData,
              category: e.target.value,
            });
          }}
        >
          {categories.map((category, index) => (
            <option key={index}>{category}</option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white rounded-md p-2 hover:bg-blue-400 mt-4"
      >
        {type === FormTypeEnum.NEW ? "Add" : "Updated"}
      </button>
    </form>
  );
};

export default Form;
