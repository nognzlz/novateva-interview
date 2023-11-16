import React from "react";

export const Button = ({ children, onClick }) => {
  return (
    <button className="p-2 rounded-md border border-slate-700 bg-slate-200">
      {children}
    </button>
  );
};
