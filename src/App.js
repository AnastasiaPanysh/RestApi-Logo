import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthPage from './Pages/AuthPage/AuthPage';


function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />}></Route>

    </Routes>
  );
}

export default App;
