import express from 'express';
import cors from 'cors';
import { query } from './db';
import path from 'path';
import { Expense } from './services/Expense';
import bcrypt from 'bcryptjs';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, '../dist')));

app.post('/api/signup', async (req, res) => {
  const { first_name, last_name, email, password, address, gender, birthdate } = req.body;
  
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await query(
      'INSERT INTO users (first_name, last_name, email_address, password, address, gender, birthdate) VALUES ($1, $2, $3, $4, $5, $6, $7)',
      [first_name, last_name, email, hashedPassword, address, gender, birthdate]
    );
    res.status(201).send('User created successfully');
  } catch (err) {
    console.error('Error creating user (from server ini na mssg)', err);
    res.status(500).send('Server error');
  }
});

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await query('SELECT * FROM users WHERE email_address = $1', [email]);
    const user = result.rows[0];
    if (user && await bcrypt.compare(password, user.password)) {
      res.status(200).json(user);
    } else {
      res.status(401).send('Invalid email or password');
    }
  } catch (err) {
    console.error('Error logging in', err);
    res.status(500).send('Server error');
  }
});
   
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
