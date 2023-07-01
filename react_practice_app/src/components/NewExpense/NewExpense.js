import React from "react";
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {
    
    const SaveExpenseDataHandler = (expenseData) => 
    {
        const expenseValue = {
            ...expenseData,
            id : Math.random().toString()
        }
        props.onAddExpenseData(expenseValue);
      // alert(" Id:  "+ expenseValue.id +"\n Title: "+expenseValue.title+"\n Amount: "+ expenseValue.amount+"\n Date: "+ expenseValue.date);
    }
    
    return (<div className="new-expense">
      
      <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler}></ExpenseForm>

    </div>);
}

export default NewExpense;
