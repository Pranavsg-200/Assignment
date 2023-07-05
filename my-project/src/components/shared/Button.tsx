// src/components/shared/Button.tsx
import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  // Additional props, if needed
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded"
    >
      {children}
    </button>
  );
};

export default Button;
