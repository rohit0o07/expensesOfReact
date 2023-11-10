import Expenses from '../src/components/Expenses/Expenses.js'
import React, { useState,useEffect } from 'react';
import NewExpense from './components/NewExpense/NewExpense.js';

// [
//   {
//     id: "1",
//     title: "House Rent",
//     price: "250",
//     date: "Tue Nov 10 2023 13:58:00 GMT+0530 (India Standard Time)",
//   },
//   {
//     id: "2",
//     title: "Food",
//     price: "20",
//     date: "Tue Nov 10 2023 13:58:00 GMT+0530 (India Standard Time)",
//   }
// ];

let DUMMY_EXPENSE = [];
const App = () => {
 
  const[expenses,setExpenses] = useState(DUMMY_EXPENSE)

  function fetchData(){
    fetch('https://api.sampleapis.com/fakebank/accounts').then(
      response => {
      return response.json();                        
    }
  ).then(
    data => {
      // console.log(data);
      setExpenses(data);
    }
  );
  }
useEffect(() =>{
    fetchData();
},[]);

  

  const addExpenseHandler = (expense) =>{
  // const updatedExpense = [expense,...expenses];
  // setExpenses(updatedExpense)
  fetch('',{
    method:'POST',
    body:JSON.stringify(expense),
    headers:{
      'content-Type':'application/json'
    }
  }).then(
    response => {
      fetchData();
    }
  )
 }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
}

export default App
