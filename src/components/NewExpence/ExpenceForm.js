import React, { useState } from "react";
import "./ExpenceForm.css";

function ExpenceForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleCangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountCangeHandler = (event) => {
    setEnteredAmount(parseFloat(event.target.value));
  };
  const dateCangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenceData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    // console.log(expenceData);
    props.onSaveExpenseData(expenceData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleCangeHandler}
            value={enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountCangeHandler}
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            step="2023-12-31"
            onChange={dateCangeHandler}
            value={enteredDate}
          />
        </div>

        <div className="new-expense__actions">
          <button type="submit" onClick={()=>{console.log(enteredAmount)}}>Add Expense</button>
        </div>
      </div>
    </form>
  );
}

export default ExpenceForm;
