import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2022, 7, 18)
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 789.67,
    date: new Date(2020, 2, 12)
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 234.56,
    date: new Date(2022, 4, 5)
  },{
    id: 'e4',
    title: 'New Desh',
    amount: 456,
    date: new Date(2019, 7, 10)
  }
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);


  const addExpenseDataHandler = expense => {
    setExpenses((prevExpenses)=> {
      return [expense, ...prevExpenses];
    });
  }

  return (
    <div>
      <NewExpense onAddExpenseData={addExpenseDataHandler} />
      <Expenses item={expenses} />
    </div>
  );
}

export default App;