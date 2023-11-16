import React, { useEffect, useState } from "react";

export const Pagination = ({ pageNumbers }) => {
  const [number, setNumbers] = useState([]);

  useEffect(() => {
    const arr = [];
    for (let i = 1; i <= pageNumbers; i++) {
      arr.push(i);
    }
    setNumbers(arr);
  }, [pageNumbers]);

  return (
    <div className="flex flex-row m-4">
      {number.map((number) => (
        <div key={number} className="p-2">
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
            {number}
          </button>
        </div>
      ))}
    </div>
  );
};
