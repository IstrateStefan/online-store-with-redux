import React from 'react';
import './App.css';
import { Main } from './components/Main/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FilteredProducts } from './components/FilteredProducts/FilteredProducts';
import { SingleProduct } from './components/FilteredProducts/SingleProduct';

export default function App() {
  return (
    <h1 className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/filteredProducts/:type"
            element={<FilteredProducts />}
          />
          <Route
            path="/filteredProducts/:type/:id"
            element={<SingleProduct />}
          />
        </Routes>
      </BrowserRouter>
    </h1>
  );
}
