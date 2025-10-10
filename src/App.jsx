import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPage';
import Layout from './Layout';
import LoginPage from './Pages/LoginPage/LoginPage';
import { useState } from 'react';
import CasePage from './Pages/CasePage/CasePage';

const App = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/landing" replace />} />
        <Route path="landing" element={<LandingPage />} />
        <Route
          path="login"
          element={
            <LoginPage id={id} setId={setId} name={name} setName={setName} />
          }
        />
        <Route path="case" element={<CasePage name={name} id={id} />} />
        <Route path="" />
      </Route>
      <Route path="*" element={<Navigate to="/landing" replace />} />
    </Routes>
  );
};

export default App;
