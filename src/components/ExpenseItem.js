import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'

function ExpenseItem(props) {
    const clickHandler = () => {
        alert('Button Clicked!');
    }
    return (
    <div className='expense-item'>
    <ExpenseDate date={props.date} />
        <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
    </div>
    );
}

export default ExpenseItem;