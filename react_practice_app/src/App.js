import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense  from "./components/NewExpense/NewExpense";

function MyApp() {

  const AddNewExpenseDataHandler = (expenseValue) => {
    alert(" Id:  "+ expenseValue.id +"\n Title: "+expenseValue.title+"\n Amount: "+ expenseValue.amount+"\n Date: "+ expenseValue.date);
  }
  return (
    <div>
        <NewExpense onAddExpenseData={AddNewExpenseDataHandler}></NewExpense>
      <div>
        <Expenses />
      </div>
    </div>
  );
}

export default MyApp;
