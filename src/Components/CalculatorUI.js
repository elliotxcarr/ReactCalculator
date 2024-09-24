import React, { useState } from "react";
import Numbers from "./Numbers";
import Operators from "./Operators";

export default function CalculatorUI() {
  const [boxText, setBoxText] = useState("");
  const [showingResult, setShowingResult] = useState(false);
  const [operatorActive, setOperatorActive] = useState(true);

  const updateBoxText = (numberClicked) => {
    if (numberClicked === "C") {
      clearDisplay();
      setOperatorActive(true);
    } 
    else if(numberClicked === "<-"){
      setBoxText(boxText.slice(0,-1 ))
    }else {
      if (showingResult) {
        clearDisplay();
        setBoxText(numberClicked);
      } else {
        setBoxText(boxText + numberClicked);
        setOperatorActive(false);
      }
    }
  };

  const handleOperator = (operator) => {
    let result = 0;
    //if the result is already showing and operator clicked is not =
    if (showingResult && operator !== "=") {
      setBoxText(boxText + operator);
      setShowingResult(false);
      setOperatorActive(true);
    }
    //if the previous button clicked was not an operator
    else if (!operatorActive) {
      if (operator === "=") {
        result = eval(boxText);
        displayResult(result);
      } else {
        setBoxText(boxText + operator);
        setOperatorActive(true);
      }
    }
    //if the previous button clicked was an operator - do nothing
    else {
      return;
    }
  };

  const displayResult = (result) => {
    //if the result is greater than 10 characters - round to 4 d.p.
    if (result.toString().length > 10) {
      result = result.toFixed(4);
    }
    setBoxText(result);
    setShowingResult(true);
    setOperatorActive(false);
  };

  const clearDisplay = () => {
    setBoxText("");
    setOperatorActive(false);
    setShowingResult(false);
  };

  return (
    <div className="flex justify-center h-screen items-center">
      <div className="flex flex-col w-auto h-auto rounded-3xl bg-gray-400 items-center p-5 ">
        <div className="m-3  w-full h-16 text-3xl bg-gray-500 flex items-center justify-end">
          {boxText}
        </div>
        <Numbers buttonClicked={updateBoxText} />
        <Operators operatorClicked={handleOperator} />
      </div>
    </div>
  );
}
