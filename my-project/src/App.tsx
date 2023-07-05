// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/login/LoginPage';
import ForgotPasswordPage from './components/forgotPassword/ForgotPasswordPage';
import MultiStepForm from './components/multiStepForm/MultiStepForm';

const App: React.FC = () => {
  return (
    <Router>
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/forgot-password">
            <ForgotPasswordPage />
          </Route>
          <Route path="/form">
            <MultiStepForm />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
