// src/components/login/LoginPage.tsx
import React from 'react';
import LoginForm from './LoginForm';

const LoginPage: React.FC = () => {
  const handleLoginSuccess = () => {
    // Redirect to the form page on successful login
    // You can use React Router or any other method to do the redirection
    // For simplicity, we are using the window.location.replace method here
    window.location.replace('/form');
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-1/4 p-4 bg-white rounded shadow">
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <LoginForm onLoginSuccess={handleLoginSuccess} />
      </div>
    </div>
  );
};

export default LoginPage;
