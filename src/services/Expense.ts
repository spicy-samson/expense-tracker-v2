export class Expense {
expense_id: number; 
  name: string;
  price: number;
  quantity: number | null;
  vendor: string;
  place_bought_id: number;
  category_id: number;

  constructor(
    expense_id: number,
    name: string,
    price: number,
    quantity: number | null = null,
    vendor: string,
    place_bought_id: number,
    category_id: number
  ) {
    this.expense_id = expense_id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.vendor = vendor;
    this.place_bought_id = place_bought_id;
    this.category_id = category_id;
  }
}
