// src/components/login/LoginForm.tsx
import React, { useState } from 'react';
import Input from '../shared/Input';

interface LoginFormProps {
  onLoginSuccess: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Call the login API with email and password
      // Replace 'API_URL' with the actual API endpoint for login
      const response = await fetch('https://x8ki-letl-twmt.n7.xano.io/apidoc:XooRuQbs/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        // Login successful, redirect to the form page
        onLoginSuccess();
      } else {
        // Login failed, display error message
        setLoginError('Login failed. Please check your email and password.');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <Input
        type="email"
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Input
        type="password"
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      {loginError && <div className="text-red-500">{loginError}</div>}
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
