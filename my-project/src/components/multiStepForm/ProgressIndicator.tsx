// src/components/multiStepForm/ProgressIndicator.tsx
import React from 'react';

interface ProgressIndicatorProps {
  step: number;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ step }) => {
  return (
    <div className="flex items-center justify-center space-x-4">
      {[1, 2, 3, 4, 5].map((item) => (
        <div
          key={item}
          className={`w-4 h-4 rounded-full ${
            step >= item ? 'bg-blue-500' : 'bg-gray-300'
          }`}
        />
      ))}
    </div>
  );
};

export default ProgressIndicator;
