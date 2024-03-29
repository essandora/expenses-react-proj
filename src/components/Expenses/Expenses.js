import './Expenses.css'
import Card from '../UI/Card'
import ExpenseItem from './ExpenseItem'


const Expenses = () => {
const expenses = [
    {
      date: new Date(2024, 0, 10),
      title: 'New book',
      price: 30.99
    },
    {
      date: new Date(2023, 0, 10),
      title: 'New jeans',
      price: 99.99  
    }
]


return(
    <div className="expenses">
        <ExpenseItem
        expenseData={expenses[0]}
        />
        <ExpenseItem
        expenseData={expenses[1]}
        />
    </div>
);
};


export default Expenses