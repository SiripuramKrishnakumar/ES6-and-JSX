import React from 'react';
import "./ExpenseItem.css";
import "./ExpenseDate";
import ExpenseDate from "./ExpenseDate";
import Card  from "../UI/composition_example/Card";

// function ExpenseItem(props)
// {
//     return (
//         <div className="expense-item">
//             <h2>{props.date.toDateString()}</h2>
//             <div className="expense-item__description">
//                 <h2>{props.expenseItemDesc}</h2>
//                 <div className="expense-item__price">{props.cost} Rs</div>
//             </div>
//         </div>
//     );
// }

function ExpenseItem(data) {
  return (
    // <div className="expense-item">
    //   <ExpenseDate date = {data.expense.date}/>
    //   <div className="expense-item__description">
    //     <h2>{data.expense.expenseDesc}</h2>
    //     <div className="expense-item__price">{data.expense.cost} Rs</div>
    //   </div>
    // </div>

    <Card className="expense-item">
      <ExpenseDate date={data.expense.date} />
      <div className="expense-item__description">
        <h2>{data.expense.expenseDesc}</h2>
        <div className="expense-item__price">{data.expense.cost} Rs</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
