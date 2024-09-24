import React from "react";
const operators = ["*", "/", "+", "-", "="];

export default function Operators({ operatorClicked }) {
  const printOperators = operators.map((operator) => (
    <div
      className={`flex items-center justify-center m-1 p-3 w-10 h-10  border-black border-2 rounded-md bg-green-500 hover:bg-green-700 hover:cursor-pointer }`}
      onClick={() => operatorClicked(operator)}
    >
      <p className="text-3xl">{operator}</p>
    </div>
  ));
  return <div className="grid grid-cols-5">{printOperators}</div>;
}
