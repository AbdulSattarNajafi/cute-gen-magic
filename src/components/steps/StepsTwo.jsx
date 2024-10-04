import { FaArrowRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import useSteps from '../../hooks/useSteps';
import { useForm } from 'react-hook-form';
import { useState, useRef } from 'react';

function StepsTwo() {
  const [acceptTerms, setAcceptTerms] = useState(false);
  const submitBtnRef = useRef();
  const { nextStep } = useSteps();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const nextStepHandler = () => {
    if (submitBtnRef.current) {
      submitBtnRef.current.click();
    }
  };

  const onSubmit = (data) => {
    if (Object.keys(errors).length > 0) return;
    const { email, image1, image2, image3, video } = data;

    console.log(email, image1, image2, image3, video);

    // Submit the Data & Move to Next Step
    nextStep();
  };

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
            <input type='checkbox' onChange={(e) => setAcceptTerms(e.target.checked)} />
            <p>
              I Accept all <Link to='terms-of-services'>Terms of Service</Link> &{' '}
              <Link to='privacy-policy'>Privacy Policy</Link>
            </p>
            <span className='step__points-checkmark'></span>
          </div>
        </div>

        <div className='step__points-btnWrapper'>
          <button className='step__points-btn' onClick={nextStepHandler} disabled={!acceptTerms}>
            <span>Next</span>
            <span className='icon'>
              <FaArrowRight />
            </span>
          </button>
        </div>
      </div>

      {/* ============== Image Picker ================== */}
      <div className='image__pickers'>
        <form className='form' onSubmit={handleSubmit(onSubmit)}>
          <div className='form__row'>
            <label htmlFor='email'>Contact Email Address:</label>
            <input
              type='text'
              id='email'
              name='email'
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: 'Please enter a valid email',
                },
              })}
            />
            <p role='alert' className='form__row-error'>
              {errors.email ? errors.email.message : ''}
            </p>
          </div>
          <div className='form__row'>
            <label htmlFor='video'>Video Description:</label>
            <textarea
              name='video'
              id='video'
              {...register('video', { required: 'Video description is required' })}
            ></textarea>
            <p role='alert' className='form__row-error'>
              {errors.video ? errors.video.message : ''}
            </p>
          </div>
          <div className='form__row'>
            <label htmlFor='image1'>Image Description 1:</label>
            <textarea
              name='image1'
              id='image1'
              {...register('image1', { required: 'Image 1 description is required' })}
            ></textarea>
            <p role='alert' className='form__row-error'>
              {errors.image1 ? errors.image1.message : ''}
            </p>
          </div>
          <div className='form__row'>
            <label htmlFor='image2'>Image Description 2:</label>
            <textarea
              name='image2'
              id='image2'
              {...register('image2', { required: 'Image 2 description is required' })}
            ></textarea>
            <p role='alert' className='form__row-error'>
              {errors.image2 ? errors.image2.message : ''}
            </p>
          </div>
          <div className='form__row'>
            <label htmlFor='image3'>Image Description 3:</label>
            <textarea
              name='image3'
              id='image3'
              {...register('image3', { required: 'Image 3 description is required' })}
            ></textarea>
            <p role='alert' className='form__row-error'>
              {errors.image3 ? errors.image3.message : ''}
            </p>
          </div>
          <button className='form__row-submit' type='submit' ref={submitBtnRef}></button>
        </form>
      </div>
    </div>
  );
}

export default StepsTwo;
