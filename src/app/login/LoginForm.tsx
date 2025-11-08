"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const formSubmitHndler = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "") return toast.error("Email is requierd");
    if (pass === "") return toast.error("pass is requierd");
    console.log({ email, pass });
  };
  return (
    <div>
      <form className="flex flex-col" onSubmit={formSubmitHndler}>
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
          className="text-2xl text-white bg-blue-800 p-2 rounded-lg font-bold"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
