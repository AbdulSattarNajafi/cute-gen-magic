import useSteps from '../../hooks/useSteps';
import { FaArrowLeft, FaXmark } from 'react-icons/fa6';
import StepsOne from './StepsOne';
import StepsTwo from './StepsTwo';
import StepsThree from './StepsThree';

import './steps.css';

function Steps() {
  const { currentStep, prevStep, showSteps, closSteps } = useSteps();

  return (
    <div className={`steps ${showSteps ? 'active' : ''}`}>
      <div className='steps__header'>
        <button
          className={`steps__header-btn ${currentStep === 1 ? 'hide-btn' : ''}`}
          onClick={prevStep}
        >
          <span className='icon'>
            <FaArrowLeft />
          </span>
          <span>Back</span>
        </button>
        <div className='steps__steps steps__desktop'>
          <div className={`steps__steps-item ${currentStep === 1 ? 'active' : ''}`}>
            <p>step 1</p>
            <span className='steps__steps-circle'></span>
          </div>
          <div className={`steps__steps-item ${currentStep === 2 ? 'active' : ''}`}>
            <p>step 1</p>
            <span className='steps__steps-circle'></span>
          </div>
          <div className={`steps__steps-item ${currentStep === 3 ? 'active' : ''}`}>
            <p>step 1</p>
            <span className='steps__steps-circle'></span>
          </div>
          <div className='steps__steps-line'></div>
        </div>
        <button className='steps__header-btn' onClick={closSteps}>
          <span className='icon'>
            <FaXmark />
          </span>
          <span>Close</span>
        </button>
      </div>

      <div className='steps__steps steps__mobile'>
        <div className={`steps__steps-item ${currentStep === 1 ? 'active' : ''}`}>
          <p>step 1</p>
          <span className='steps__steps-circle'></span>
        </div>
        <div className={`steps__steps-item ${currentStep === 2 ? 'active' : ''}`}>
          <p>step 1</p>
          <span className='steps__steps-circle'></span>
        </div>
        <div className={`steps__steps-item ${currentStep === 3 ? 'active' : ''}`}>
          <p>step 1</p>
          <span className='steps__steps-circle'></span>
        </div>
        <div className='steps__steps-line'></div>
      </div>

      <div className='steps__content'>
        {currentStep === 1 && <StepsOne />}
        {currentStep === 2 && <StepsTwo />}
        {currentStep === 3 && <StepsThree />}
      </div>
    </div>
  );
}

export default Steps;
