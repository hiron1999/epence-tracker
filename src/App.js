import React, { useState } from "react";
import Expences from "./components/Expence/Expences";

import NewExpence from "./components/NewExpence/NewEpence";
import Card from "./components/UI/Card";

const Initial_Expences = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  const [expenses, setExpenses] = useState(Initial_Expences);

  const addExpensehandler = (expense) => {
    setExpenses((prevExpences) => {
      return [expense, ...prevExpences];
    });
    // console.log(expense);
  };

  return (
    <Card className='app_back'>
      <NewExpence onAddExpence={addExpensehandler} />

      <Expences expenses={expenses} />
    </Card>
  );
}

export default App;
