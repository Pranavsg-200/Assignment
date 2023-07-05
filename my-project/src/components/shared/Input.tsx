// src/components/shared/Input.tsx
import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  // Additional props, if needed
}

const Input: React.FC<InputProps> = ({ label, ...rest }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-bold mb-1" htmlFor={rest.id}>
        {label}
      </label>
      <input
        {...rest}
        className="w-full px-3 py-2 border rounded"
      />
    </div>
  );
};

export default Input;
