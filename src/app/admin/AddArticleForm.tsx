"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";
const AddArticleForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const formSubmitHndler = (e: React.FormEvent) => {
    e.preventDefault();
    if (title === "") return toast.error("Title is requierd");
    if (description === "") return toast.error("Description is requierd");
    console.log({ title, description });
  };
  return (
    <div>
      <form className="flex flex-col" onSubmit={formSubmitHndler}>
        <input
          className="mb-4 border rounded p-2 text-xl"
          type="text"
          placeholder="Enter Your title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="mb-4 lg:text-xl rounded resize-none"
          rows={5}
          placeholder="Enter Article Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="text-2xl text-white bg-blue-700 p-2 hover:bg-blue-900 rounded-lg font-bold"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddArticleForm;
