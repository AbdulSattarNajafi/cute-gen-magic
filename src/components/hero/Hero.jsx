import StarIcon from './../../assets/icons/stars.png';
import './hero.css';

function Hero() {
  return (
    <div className='hero'>
      <div className='hero__content'>
        <h1>Turn Your Baby into Anything You Can Imagine!</h1>
        <div className='hero__content-icon'>
          <img src={StarIcon} alt='Stars' />
        </div>
        <p>
          Upload 10 photos and receive a personalized 10-second video along with 3 high-quality
          AI-generated images of in different themed settings of your choice.
        </p>
      </div>
    </div>
  );
}

export default Hero;
