import "./ExpenceDate.css";
function ExpenceDate(ExpenceDate) {
  const month = ExpenceDate.date.toLocaleString("en-US", { month: "long" });
  const day = ExpenceDate.date.toLocaleString("en-US", { day: "2-digit" });
  const year = ExpenceDate.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month ">{month}</div>
      <div className="expense-date__day ">{day}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
}

export default ExpenceDate;
