import "./ExpenceItem.css";
import ExpenceDate from "./ExpenceDate";
import Card from "../UI/Card";
function ExpenceItem(ExpenceData) {
  return (
    <Card className='expense-item'>
      <ExpenceDate date={ExpenceData.date} />
      <div className="expense-item__description">
        <h2>{ExpenceData.title}</h2>
        <div className="expense-item__price">{ExpenceData.amount}/-</div>
      </div>
    </Card>
  );
}

export default ExpenceItem;
