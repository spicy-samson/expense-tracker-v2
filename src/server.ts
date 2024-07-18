import express from 'express';
import cors from 'cors';
import { query } from './db';
import path from 'path';
import { Expense } from './services/Expense';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
// Serve static files from the public directory
app.use(express.static(path.join(__dirname, '../public')));

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

// Serve the frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
