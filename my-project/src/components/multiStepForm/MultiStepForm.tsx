// src/components/multiStepForm/MultiStepForm.tsx
import React, { useState } from 'react';
import ProgressIndicator from './ProgressIndicator';
import Input from '../shared/Input';
import Button from '../shared/Button';

const MultiStepForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    step1: '',
    step2: '',
    step3: '',
    step4: '',
    step5: '',
  });

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleFormSubmit = () => {
    // Handle form submission here, you can call the API if needed
    // with the formData
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      <ProgressIndicator step={step} />
      {step === 1 && (
        <div>
          <Input
            label="Step 1"
            value={formData.step1}
            onChange={(e) => setFormData({ ...formData, step1: e.target.value })}
            required
          />
          <Button onClick={handleNextStep}>Next</Button>
        </div>
      )}
      {step === 2 && (
        <div>
          <Input
            label="Step 2"
            value={formData.step2}
            onChange={(e) => setFormData({ ...formData, step2: e.target.value })}
            required
          />
          <Button onClick={handlePreviousStep}>Previous</Button>
          <Button onClick={handleNextStep}>Next</Button>
        </div>
      )}
      {step === 3 && (
        <div>
          <Input
            label="Step 3"
            value={formData.step3}
            onChange={(e) => setFormData({ ...formData, step3: e.target.value })}
            required
          />
          <Button onClick={handlePreviousStep}>Previous</Button>
          <Button onClick={handleNextStep}>Next</Button>
        </div>
      )}
      {step === 4 && (
        <div>
          <Input
            label="Step 4"
            value={formData.step4}
            onChange={(e) => setFormData({ ...formData, step4: e.target.value })}
            required
          />
          <Button onClick={handlePreviousStep}>Previous</Button>
          <Button onClick={handleNextStep}>Next</Button>
        </div>
      )}
      {step === 5 && (
        <div>
          <Input
            label="Step 5"
            value={formData.step5}
            onChange={(e) => setFormData({ ...formData, step5: e.target.value })}
            required
          />
          <Button onClick={handlePreviousStep}>Previous</Button>
          <Button onClick={handleFormSubmit}>Submit</Button>
        </div>
      )}
    </div>
  );
};

export default MultiStepForm;
