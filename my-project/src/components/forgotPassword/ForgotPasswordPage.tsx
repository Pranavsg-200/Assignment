// src/components/forgotPassword/ForgotPasswordPage.tsx
import React from 'react';
import ForgotPasswordForm from './ForgotPasswordForm';

const ForgotPasswordPage: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-1/4 p-4 bg-white rounded shadow">
        <h2 className="text-xl font-bold mb-4">Forgot Password</h2>
        <ForgotPasswordForm />
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
