import '../Expenses/Expenses.css'
import ExpenseItem from '../Expenses/ExpenseItem.js';
import Card from '../UI/Card.js';
import React,{useState} from 'react';

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {
        props.item.map(
          expense => (
            <ExpenseItem
              key = {expense.id}
              date={expense.transactionDate}
              title={expense.description}
              amount={expense.debit}/>
        )
        )
      }
    </Card>
  );
}

export default Expenses;

//npm install -g json-server