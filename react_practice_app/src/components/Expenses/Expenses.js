import React, { useState } from "react";
import ReactDOM from 'react-dom';
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/composition_example/Card";
import ExpensesFilter from "./ExpenseFilter";


function Expenses( props) {

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter(expense => {
    return new Date(expense.date).getFullYear().toString() === filteredYear;
  });

  let HelperMessage = <p>This is portal example, this will render in index.html page root element from here.</p>

  let content = filteredExpenses.length > 0 ? (filteredExpenses.map((expense) => (
    <ExpenseItem key={expense.key} expense={expense} />) )) : (<p>No Data.</p>);
  return (
    // This is to avoid lot of div elements in page Fragment is an empty element like to wrap the multiple elements as jsx will return only one element.
    <React.Fragment> 

      <ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler} />
      
      {ReactDOM.createPortal(HelperMessage,document.getElementById("portal-example-root"))}


      <Card>
        {content}
      </Card>
    </React.Fragment>
  );
}

export default Expenses;
