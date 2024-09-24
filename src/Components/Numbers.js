import React from "react";

const buttons = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "C", "<-"];

export default function Numbers({ buttonClicked }) {
  const numberButtons = buttons.map((button) => (
    <div
      className={`flex items-center justify-center sm:p-3 sm:w-16 sm:h-16 w-16 h-16 m-1 border-black border-2 rounded-md hover:cursor-pointer ${
        button === "C"
          ? "bg-red-500 hover:bg-red-700"
          : "hover:bg-slate-500  bg-gray-300 "
      }`}
      onClick={() => buttonClicked(button)}
    >
      <p className="text-2xl">{button}</p>
    </div>
  ));

  return <div className="grid grid-cols-3">{numberButtons}</div>;
}
