"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";
const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const formSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "") return toast.error("Username is requierd");
    if (email === "") return toast.error("Email is requierd");
    if (pass === "") return toast.error("Password is requierd");
    console.log({ email, pass ,username});
  };
  return (
    <div>
      <form className="flex flex-col" onSubmit={formSubmitHandler}>
        <input
          className="mb-4 border rounded p-2 text-xl"
          type="text"
          placeholder="Enter Your Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="mb-4 border rounded p-2 text-xl"
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="mb-4 border rounded p-2 text-xl"
          type="password"
          placeholder="Enter Your Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <button
          type="submit"
          className="text-2xl text-white bg-blue-800 p-2 rounded-lg"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
