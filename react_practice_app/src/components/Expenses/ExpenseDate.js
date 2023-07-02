import './ExpenseDate.css';
import React from 'react';

export default function ExpenseDate(props)
{
    const month = new Date(props.date).toLocaleString("en-US", { month: "long" });
   const year = new Date(props.date).getFullYear();
  const day = new Date(props.date).toLocaleString("en-US", { day: "2-digit" });
    return(
    <div className="expense-date">
        <div className="expense-date__month" > {month}</div>
        <div className="expense-date__year">{year}</div>
        <div className="expense-date__day">{day}</div>
      </div>
    ); 
}