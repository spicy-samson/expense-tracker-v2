import { query } from '../db';

export class ExpenseService {

  static async getData() {
    const text = 'SELECT * FROM category';
    const res = await query(text);

    return res.rows;
  }

  static async saveExpense(){
    
  }
}