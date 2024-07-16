import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';



interface Expense {
  product: string;
  cost: number;
  bought_where: string;
}

var gastos1: Expense = {
  product: 'Chowking siomai chao fan',
  cost: 99,
  bought_where: 'SM Legazpi Chowking',
}
const rootElement = document.getElementById('app');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App {...gastos1} />);
} else {
  console.error('Failed to find the root element');
}
