import React from "react";

export const Input = ({ children, type, placeholder, value, setValue }) => {
  return (
    <input
      className="w-full p-4 rounded-md border border-slate-400"
      placeholder={placeholder}
      type={type}
    >
      {children}
    </input>
  );
};
