import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Menu from '../component/Menu';
import Layout from '../Layout';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout/>} />
            <Route path="/Menu" element={<Menu/>} />

    </Routes>
  );
};

export default AppRoutes;
