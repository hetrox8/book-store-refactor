import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import Books from '../routes/Books';
import Categories from '../routes/Categories';
import Layout from './Layout';
import NotMatch from '../routes/NotMatch';
import '../styles/App.css';

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Books />} />
      <Route path="categories" element={<Categories />} />
      <Route path="*" element={<NotMatch />} />
    </Route>
  </Routes>
);

export default App;
