import React, { useState } from "react";
import "./ExpenseForm.css";

// const ExpenseForm = () => {

//     const [enteredValue,SetTitleValue] = useState('');

//  const onTitleChangeHandler = (event) => {
//     SetTitleValue(event.target.value);
//  }

//  const onAmountChangeHandler = event => {
//     SetTitleValue(event.target.value);
//  }

//  const onDateChangeHandler = (event) => {
//     SetTitleValue(event.target.value);
//  }

//   return (
//     <form>
//         <div className="new-expense__controls">
//             <div className="new-expense__control">
//             <label>Title</label>
//             <input onChange={onTitleChangeHandler} type="text" />
//         </div>
//         <div className="new-expense__control">
//             <label>Amount</label>
//             <input type="number" min={0.1} max={100} onChange={onAmountChangeHandler}/>
//         </div>
//         <div className="new-expense__control">
//             <label>Date</label>
//             <input type="date"  min="01/01/2021" max="01/12/2023" onChange={onDateChangeHandler}/>
//         </div>
//         <div className="new-expense__actions">
//             <button type="submit">Add New Expense</button>
//         </div>

//         </div>
//         <div>
//         <label>{enteredValue}</label>
//         </div>
//     </form>
//   );
// };

// with object and spread operator which will store previous state values.

// const ExpenseForm = () => {

//     const [enteredValue,SetValue] = useState({
//         title:"",
//         amount:"",
//         date:""
//     });

//  const onTitleChangeHandler = (event) => {
//     SetValue((prevState) =>  {
//        return { ...prevState, title: event.target.value };
//     });
//  };

//  const onAmountChangeHandler = event => {
//     SetValue((prevState) =>  {
//         return { ...prevState, amount: event.target.value };
//      });
//  }

//  const onDateChangeHandler = (event) => {
//     SetValue((prevState) =>  {
//         return { ...prevState, date: event.target.value };
//      });
//  }

//   return (
//     <form>
//         <div className="new-expense__controls">
//             <div className="new-expense__control">
//             <label>Title</label>
//             <input onChange={onTitleChangeHandler} type="text" />
//         </div>
//         <div className="new-expense__control">
//             <label>Amount</label>
//             <input type="number" min={0.1} max={100} onChange={onAmountChangeHandler}/>
//         </div>
//         <div className="new-expense__control">
//             <label>Date</label>
//             <input type="date"  min="01/01/2021" max="01/12/2023" onChange={onDateChangeHandler}/>
//         </div>
//         <div className="new-expense__actions">
//             <button type="submit">Add New Expense</button>
//         </div>

//         </div>
//         <div>
//         <label>{enteredValue}</label>
//         </div>
//     </form>
//   );
// };

// Shared Handler Function
// Form Submission
//Child to Parent Component communication

const ExpenseForm = (props) => {

  const [formView, setFormView] = useState(false);

  function OnClickHandlerViewForm()
  {
    setFormView(true);
  }

  function OnClickHandlerViewButton()
  {
    setFormView(false);
  }

  const [enteredValue, SetValue] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const onInputChangeHandler = (identifier, Val) => {
    if (identifier === "title") {
      SetValue((prevState) => {
        return { ...prevState, title: Val };
      });
    } else if (identifier === "amount") {
      SetValue((prevState) => {
        return { ...prevState, amount: Val };
      });
    } else {
      SetValue((prevState) => {
        return { ...prevState, date: Val };
      });
    }
  };

  const SubmitHandler = (event) => {
    event.preventDefault();
    props.onSaveExpenseData(enteredValue);
  };

  let content  =  formView ?
     (
      <form onSubmit={SubmitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              onChange={(event) => {
                onInputChangeHandler("title", event.target.value);
              }}
              type="text"
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min={0.1}
              max={100}
              onChange={(event) => {
                onInputChangeHandler("amount", event.target.value);
              }}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="01/01/2021"
              max="01/12/2023"
              onChange={(event) => {
                onInputChangeHandler("date", event.target.value);
              }}
            />
          </div>
          <div className="new-expense__actions">
          <button onClick={OnClickHandlerViewButton}> Cancel </button>
            <button type="submit">Add New Expense</button>
          </div>
        </div>
        <div className="new-expense__control">
          <br />
          <label>Title: {enteredValue.title}</label>
          <br />
          <label>Amount: {enteredValue.amount}</label>
          <br />
          <label>Date: {enteredValue.date}</label>
          <br />
        </div>
      </form>
    ) : (<button onClick={OnClickHandlerViewForm}> Add New Expense </button>);

  return <div>{content}</div>;


};

export default ExpenseForm;
