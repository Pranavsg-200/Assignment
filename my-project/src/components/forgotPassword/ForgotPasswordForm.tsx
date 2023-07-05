// src/components/forgotPassword/ForgotPasswordForm.tsx
import React, { useState } from 'react';
import Input from '../shared/Input';

const ForgotPasswordForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [resetPasswordSuccess, setResetPasswordSuccess] = useState(false);

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Call the reset password API with the user's email
      // Replace 'API_URL' with the actual API endpoint for reset password
      const response = await fetch('https://x8ki-letl-twmt.n7.xano.io/apidoc:XooRuQbs/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        // Password reset successful, display success message
        setResetPasswordSuccess(true);
      } else {
        // Password reset failed, display error message
        console.error('Password reset failed.');
      }
    } catch (error) {
      console.error('Error during password reset:', error);
    }
  };

  return (
    <form onSubmit={handleResetPassword}>
      <Input
        type="email"
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      {resetPasswordSuccess && (
        <div className="text-green-500">Password reset instructions sent to your email.</div>
      )}
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">
        Reset Password
      </button>
    </form>
  );
};

export default ForgotPasswordForm;
