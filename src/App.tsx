import React from 'react';
import Gallery from './profile';
import { ChakraProvider } from '@chakra-ui/react';

interface Expense {
  product: string;
  cost: number;
  bought_where: string;
}

const App = (props: Expense) => {
  return (
    <div> 
      <h1>GASTOS kahapon -_-</h1>
      <p>Product: {props.product}</p>
      <p>Cost: {props.cost}</p>
      <p>Bought where: {props.bought_where}</p>
      <Gallery/>;
    </div>
  );
};

export default App;
