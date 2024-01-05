import React, { useState } from "react";
import "./Expences.css";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
function Expences(props) {
  const dist_years= new Set();
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.expenses.filter((expense) => {
    dist_years.add( expense.date.getFullYear())
    return expense.date.getFullYear().toString() === filteredYear;
  });

//  console.log("update expences....")
  return (
    <li>
      <Card className='expenses'>
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesFilter
          selected={filteredYear}
          list_years={Array.from(dist_years)}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </li>
  );
}
export default Expences;
