import React from "react";
import "./NewExpence.css";
import ExpenceForm from "./ExpenceForm";
function NewExpence(props) {
  const expenseDataSaveHandler = (enteredExpanseData) => {
    const expenseData = {
      ...enteredExpanseData,
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    props.onAddExpence(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenceForm onSaveExpenseData={expenseDataSaveHandler} />
    </div>
  );
}

export default NewExpence;
