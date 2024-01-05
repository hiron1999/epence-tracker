import React from "react";
import ExpenceItem from "./ExpenceItem";
import './ExpensesList.css'

function ExpensesList(props) {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No expense fond.</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenceItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        ></ExpenceItem>
      ))}
    </ul>
  );
}

export default ExpensesList;
