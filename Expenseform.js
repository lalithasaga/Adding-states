import React, { useState } from 'react';

function ExpenseForm() {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  function handleTitleChange(event) {
    const newTitle = event.target.value;
    setEnteredTitle(newTitle);
    console.log('Title:', newTitle);
  }

  function handleAmountChange(event) {
    const newAmount = event.target.value;
    setEnteredAmount(newAmount);
    console.log('Amount:', newAmount);
  }

  function handleDateChange(event) {
    const newDate = event.target.value;
    setEnteredDate(newDate);
    console.log('Date:', newDate);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Expense Title"
        value={enteredTitle}
        onChange={(event) => {
          handleTitleChange(event);
          setEnteredTitle(event.target.value);
        }}
      />
      <input
        type="number"
        placeholder="Expense Amount"
        value={enteredAmount}
        onChange={(event) => {
          handleAmountChange(event);
          setEnteredAmount(event.target.value);
        }}
      />
      <input
        type="date"
        value={enteredDate}
        onChange={(event) => {
          handleDateChange(event);
          setEnteredDate(event.target.value);
        }}
      />
      <button>Add Expense</button>
    </div>
  );
}

export default ExpenseForm;
