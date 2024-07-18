import express from 'express';
import cors from 'cors';
import { query } from './db';
import { Expense } from './services/Expense';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());


app.get('/api/expenses', async (req, res) => {
  try {
    const result = await query('SELECT * FROM "expense"');
    const expenses: Expense[] = result.rows.map((expense: any) =>
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
    res.json(expenses);
  } catch (err) {
    console.error('Error fetching expenses', err);
    res.status(500).send('Server error');
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
