import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Expense } from './services/Expense';



const App = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
      axios.get('http://localhost:3000/api/expenses')
        .then(response => {
          const expensesData = response.data.map((expense: any) => 
            new Expense(
              expense.expense_id,
              expense.name,
              expense.price,
              expense.quantity,
              expense.vendor,
              expense.place_bought_id,
              expense.category_id
            )
          );
          setExpenses(expensesData);
        })
        .catch(error => {
          setError('There was an error fetching the expenses!');
          console.error(error);
        });
    }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Expenses</h1>
      <ul>
        {expenses.map(expense => (
          <li key={expense.expense_id}>
            {expense.name} - {expense.price} - {expense.vendor}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
