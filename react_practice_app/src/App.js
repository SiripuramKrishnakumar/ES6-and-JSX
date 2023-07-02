import React, { useState, useRef } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import './components/NewExpense/ExpenseForm.css';

function MyApp() {
  let EXPENSE_ITEMS = [
    {
      key: 0,
      title: "Cloths Purchase",
      amount: 490.0,
      date: new Date(2023, 2, 30),
    },
    {
      key: 1,
      title: "Shoes Purchase",
      amount: 590.0,
      date: new Date(2022, 2, 30),
    },
    {
      key: 2,
      title: "Perfume Purchase",
      amount: 690.0,
      date: new Date(2021, 2, 30),
    },
    {
      key: 3,
      title: "Watch Purchase",
      amount: 390.0,
      date: new Date(2020, 2, 30),
    },
  ];

  const userNameRef = useRef();

  const accessRefValue = (event) => {
    event.preventDefault();
    alert(userNameRef.current.value);

    userNameRef.current.value = 'updated value by ref.';
  };
  const [expenseValues, setExpenseValues] = useState(EXPENSE_ITEMS);

  const AddNewExpenseDataHandler = (expenseValue) => {
    setExpenseValues((prevExpenses) => {
      return [expenseValue, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpenseData={AddNewExpenseDataHandler}></NewExpense>
      <div>
        <Expenses expenses={expenseValues} />
      </div>

      <br />
      {/* ref example */}
      <form onSubmit={accessRefValue}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
              <input type="text" ref={userNameRef}></input>
            </div>
            <div className="new-expense__actions">
              <button type="submit"> Check Ref Input Value.</button>
            </div>
        </div>
      </form>
    </div>
  );
}

export default MyApp;
