import { useContext } from 'react';
import { StepsContext } from '../contexts/stepsContext';

const useSteps = () => {
  const context = useContext(StepsContext);

  if (context === undefined) {
    throw new Error('AuthContext was used outside of the AuthProvider.');
  }

  return context;
};

export default useSteps;
