import React from 'react';
import ExpenseItem  from "./ExpenseItem";
import Card  from "../UI/composition_example/Card";
import ExpensesFilter  from './ExpenseFilter';

function Expenses() {

    let expenses = [
        {
          expenseDesc: "Cloths Purchase",
          cost: 490.0,
          date: new Date(2023, 2, 30),
        },
        {
          expenseDesc: "Cloths Purchase",
          cost: 590.0,
          date: new Date(2022, 2, 30),
        },
        {
          expenseDesc: "Cloths Purchase",
          cost: 690.0,
          date: new Date(2021, 2, 30),
        },
        {
          expenseDesc: "Cloths Purchase",
          cost: 390.0,
          date: new Date(2020, 2, 30),
        },
      ];

  return (
    <div>
      
      <ExpensesFilter />
      
      {/* <div>
        <ExpenseItem expense={expenses[0]}></ExpenseItem>
        <ExpenseItem expense={expenses[1]}></ExpenseItem>
        <ExpenseItem expense={expenses[2]}></ExpenseItem>
        <ExpenseItem expense={expenses[3]}></ExpenseItem>
      </div> */}

 {/* Composition Example  */}
      <Card>

        <ExpenseItem expense={expenses[0]}></ExpenseItem>
        <ExpenseItem expense={expenses[1]}></ExpenseItem>
        <ExpenseItem expense={expenses[2]}></ExpenseItem>
        <ExpenseItem expense={expenses[3]}></ExpenseItem>
      </Card>


    </div>
  );
}

export default Expenses;


