import StarIcon from './../../assets/icons/stars.png';
import CheckedIcon from './../../assets/icons/checked.png';

function StepsThree() {
  return (
    <div className='congratulations'>
      <div className='congratulations__content'>
        <div className='congratulations__content-icon'>
          <img src={CheckedIcon} alt='Congratulations' />
        </div>
        <h1>
          <span>Congratulations</span>
          <span className='congratulations__content-star'>
            <img src={StarIcon} alt='Stars' />
          </span>
        </h1>
        <p>
          Thank you for submitting your <b>CuteGenMagic</b> AI Video / Image Request. Please allow
          up to 48 hours for your order to be emailed to you.
        </p>
      </div>
    </div>
  );
}

export default StepsThree;
