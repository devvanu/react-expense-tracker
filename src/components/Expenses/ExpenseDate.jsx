import "./ExpenseDate.css";

const ExpenseDate = (props) => {

    let date = props.datee.toLocaleString('en-US', {day: "2-digit"});
    let month = props.datee.toLocaleString('en-US', {month: "long"});
    let year = props.datee.getFullYear();

    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{date}</div>
        </div>
    );
}

export default ExpenseDate;