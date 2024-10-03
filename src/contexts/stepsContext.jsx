import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const StepsContext = createContext();

// StepsProvider component
const StepsProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showSteps, setShowSteps] = useState(false);

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => (prevStep > 1 ? prevStep - 1 : prevStep));
  };

  // Function to reset the steps
  const resetSteps = () => {
    setCurrentStep(1);
  };

  const openSteps = () => {
    setShowSteps(true);
  };
  const closSteps = () => {
    setShowSteps(false);
  };

  const value = {
    currentStep,
    nextStep,
    prevStep,
    resetSteps,
    showSteps,
    openSteps,
    closSteps,
  };

  return <StepsContext.Provider value={value}>{children}</StepsContext.Provider>;
};

StepsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { StepsProvider, StepsContext };
