import './ExpenseForm.css'
import { useState } from 'react'

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState("")
    const [enteredAmount, setEnteredAmount] = useState("")
    const [enteredDate, setEnteredDate]     = useState("")
    
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }


    return(
        <form>
            <div>
                <div class="new-expense__controls">
                    <div class="new-expense__control">
                        <label>Title</label>
                        <input type="text"
                        onChange={titleChangeHandler}/>
                    </div>
                </div>
                <div class="new-expense__controls">
                    <div class="new-expense__control">
                        <label>Amount</label>
                        <input type="number" min="0.01" step="0.01"
                        onChange={amountChangeHandler}/>
                    </div>
                </div>
                <div class="new-expense__controls">
                    <div class="new-expense__control">
                        <label>Date</label>
                        <input type="date" min="2024-01-01" max="2026-01-31"
                        onChange={dateChangeHandler}/>
                    </div>
                </div>
            </div>
            <div class="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm