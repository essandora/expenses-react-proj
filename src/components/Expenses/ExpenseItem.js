import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'

function ExpenseItem(props) {

    return (
            <Card className="expense-item card">
            <ExpenseDate
                date={props.expenseData.date}
            />
            <div className="expense-item__description"> 
                <h2>{props.expenseData.title}</h2>
                <div className="expense-item__price">
                {props.expenseData.price}</div>
            </div>
        </div>
        </Card>
    )
}

export default ExpenseItem