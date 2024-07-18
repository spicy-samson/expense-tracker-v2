import { Pool } from "pg";

const pool = new Pool({
    user:'tres_postgres',
    host: 'localhost',
    database: 'expense-tracker',
    password: '12345',
    port: 5432,
});

export  const query = (text: string, params?: any[])=> pool.query(text, params);