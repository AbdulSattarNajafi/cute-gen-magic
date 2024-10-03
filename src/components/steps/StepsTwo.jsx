import { FaArrowRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import useSteps from '../../hooks/useSteps';
import UserForm from '../user-form/UserForm';

function StepsTwo() {
  const { nextStep } = useSteps();

  return (
    <div className='step'>
      <div className='step__points'>
        <h3>Step 2: Add Information</h3>

        <ul className='step__points-list'>
          <li>Enter a description for each Video / Image you would like created.</li>
          <li>
            Describe how you want the subject to appear, the action the subject is performing and
            the background you would like the subject placed in.
          </li>
          <li>If you’d like specific music for your video, please request it.</li>
          <li>There should not be more than 1 person in the uploaded photos.</li>
          <li>
            <b>Example:</b> Please place my happy baby boy into an NFL 49ers uniform. He should be
            holding a football in one arm and walking confidently towards the camera. The background
            should be Levi&apos;s Stadium.
          </li>
        </ul>

        <div className='step__points-checkbox'>
          <div className='step__points-checkbox-wrapper'>
            <input type='checkbox' />
            <p>
              I Accept all <Link to='terms-of-services'>Terms of Service</Link> &{' '}
              <Link to='privacy-policy'>Privacy Policy</Link>
            </p>
            <span className='step__points-checkmark'></span>
          </div>
        </div>

        <div className='step__points-btnWrapper'>
          <button className='step__points-btn' onClick={nextStep}>
            <span>Next</span>
            <span className='icon'>
              <FaArrowRight />
            </span>
          </button>
        </div>
      </div>

      {/* ============== Image Picker ================== */}
      <div className='image__pickers'>
        <UserForm />
      </div>
    </div>
  );
}

export default StepsTwo;
