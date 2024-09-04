import React from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';

let App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      {/* <Banner /> */}
      <div className="Product_List">
        <h1>Lista de Produtos</h1>
        <ProductList />
      </div>
    </div>
  );
};

export default App;
