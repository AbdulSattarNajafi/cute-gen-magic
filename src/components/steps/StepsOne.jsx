import { FaArrowRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import ImagePicker from '../image-picker/ImagePicker';
import useSteps from '../../hooks/useSteps';

function StepsOne() {
  const { nextStep } = useSteps();

  return (
    <div className='step'>
      <div className='step__points'>
        <h3>Step 1: Add Photos</h3>

        <ul className='step__points-list'>
          <li>
            Upload 10 photos of the subject you want to convert into AI. This is so the AI can learn
            and train on the subject.
          </li>
          <li>
            10 Photos aren’t required but the more photos the better so AI can best match your
            subject.
          </li>
          <li>
            Make sure your image is high resolution, the subject’s face is in clear view and has no
            filters.
          </li>
          <li>There should not be more than 1 person in the uploaded photos.</li>
          <li>
            Please ensure that the images you upload are appropriate, with nothing lewd, revealing,
            inappropriate, or illegal. Violations of our{' '}
            <Link to='terms-of-services'>Terms of Service</Link> will result in forfeiture of
            payment without refund and may be reported to law enforcement authorities.
          </li>
        </ul>

        <div className='step__points-button'>
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
        <ImagePicker />
        <ImagePicker />
        <ImagePicker />
        <ImagePicker />
        <ImagePicker />
        <ImagePicker />
        <ImagePicker />
        <ImagePicker />
        <ImagePicker />
        <ImagePicker />
      </div>
    </div>
  );
}

export default StepsOne;
