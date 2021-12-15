import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    // Set useState for the inputs
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // Add handlers functionality for setting new data input by user
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };
    const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    };
    const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        // Create an object containing user's input, on submit
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSubmitExpenseData(expenseData);
        // After submit button is clicked, this sets the inputs back to blank/empty
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' value={enteredAmount} onChange={amountChangeHandler} min='0.01' step='0.01' />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' value={enteredDate} onChange={dateChangeHandler} min='2019-01-01' max='2022-12-31' />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm
