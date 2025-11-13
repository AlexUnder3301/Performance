import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPage';
import Layout from './Layout';
import LoginPage from './Pages/LoginPage/LoginPage';
import { useState } from 'react';
import CasePage from './Pages/CasePage/CasePage';
import BriefingPage from './Pages/BriefingPage/BriefingPage';
import FirstTest from './Pages/FirstTest/FirstTest';
import SecondTest from './Pages/SecondTest/SecondTest';

const App = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [isSmoked, setIsSmoked] = useState(false);

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
        <Route path="briefing" element={<BriefingPage name={name} />} />
        <Route
          path="firsttest"
          element={<FirstTest isSmoked={isSmoked} setIsSmoked={setIsSmoked} />}
        />
        <Route
          path="secondtest"
          element={<SecondTest isSmoked={isSmoked} setIsSmoked={setIsSmoked} />}
        />
      </Route>
      <Route path="*" element={<Navigate to="/landing" replace />} />
    </Routes>
  );
};

export default App;
