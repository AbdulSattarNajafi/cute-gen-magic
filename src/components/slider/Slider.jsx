import { FaArrowRight, FaPlay, FaChevronRight } from 'react-icons/fa6';
import ReactPlayer from 'react-player';
import { default as SlickSlider } from 'react-slick';
import { useState } from 'react';

import AiIcon from './../../assets/icons/ai.png';
import Image1 from './../../assets/images/reference-image.jpg';
import BabyVideo from './../../assets/videos/football-1.mp4';
import BabyFootball from './../../assets/images/baby-football.jpg';
import Baby1 from './../../assets/images/reference-image3.jpg';
import Baby2 from './../../assets/images/reference-image2.jpg';
import Baby3 from './../../assets/images/reference-image.jpg';

import Baby4 from './../../assets/images/baby-football.jpg';
import Baby5 from './../../assets/images/baby-swat.jpg';
import Baby6 from './../../assets/images/baby-soccor.jpg';
import Baby7 from './../../assets/images/baby-hockey.jpg';
import Modal from '../modal/Modal';
import useSteps from '../../hooks/useSteps';

import './slider.css';

function Slider() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { openSteps } = useSteps();

  function playVideo() {
    setIsPlaying(true);
    setShowModal(true);
  }

  const sliderBefor = {
    className: 'slider__before-slider',
    dots: false,
    slidesToShow: 3,
    // rtl: true,
    autoplay: false,
    arrows: false,
    swipeToSlide: true,
    speed: 500,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const sliderAfter = {
    className: 'slider__after-slider',
    dots: false,
    slidesToShow: 4,
    // rtl: true,
    autoplay: false,
    arrows: false,
    swipeToSlide: true,
    speed: 500,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 370,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className='slider'>
        <div className='slider__container'>
          <div className='preview'>
            <div className='preview-wrapper'>
              <div className='preview__image-client'>
                <img src={Image1} alt='image' />
              </div>
              <div className='preview__image-transformed'>
                <img src={BabyFootball} onClick={playVideo} alt='image' />
                <button onClick={playVideo} className='play-button'>
                  <FaPlay />
                </button>
              </div>
            </div>
            <div className='preview__icon'>
              <img src={AiIcon} alt='AI icon' />
            </div>
          </div>

          <div className='preview__label'>
            <div className='preview__label-inner'>
              <p className='preview__label-text'>Get Your Baby&apos;s Transformation for</p>
              <p className='preview__label-price'>$25</p>
              <button className='preview__label-btn' onClick={openSteps}>
                <span>Create Now</span>
                <FaArrowRight />
              </button>
            </div>
          </div>

          <div className='slider__heading'>
            <h2>Before</h2>

            <h2>After</h2>
          </div>
        </div>

        {/* =============== Sliders =================== */}
        <div className='sliders-wrapper'>
          <div className='slider__before'>
            <SlickSlider {...sliderBefor}>
              <div className='slider__before-item'>
                <div className='slider__before-image'>
                  <img src={Baby1} alt='Baby ' />
                </div>
              </div>

              <div className='slider__before-item'>
                <div className='slider__before-image'>
                  <img src={Baby2} alt='Baby ' />
                </div>
              </div>

              <div className='slider__before-item'>
                <div className='slider__before-image'>
                  <img src={Baby3} alt='Baby ' />
                </div>
              </div>
            </SlickSlider>
          </div>
          <div className='slide-icon'>
            <FaChevronRight />
          </div>
          <div className='slider__after'>
            <SlickSlider {...sliderAfter}>
              <div>
                <div className='slider__after-item'>
                  <div className='slider__after-image'>
                    <img src={Baby4} alt='Baby ' />
                  </div>
                </div>
              </div>
              <div>
                <div className='slider__after-item'>
                  <div className='slider__after-image'>
                    <img src={Baby5} alt='Baby ' />
                  </div>
                </div>
              </div>
              <div>
                <div className='slider__after-item'>
                  <div className='slider__after-image'>
                    <img src={Baby6} alt='Baby ' />
                  </div>
                </div>
              </div>
              <div>
                <div className='slider__after-item'>
                  <div className='slider__after-image'>
                    <img src={Baby7} alt='Baby ' />
                  </div>
                </div>
              </div>
            </SlickSlider>
          </div>
        </div>
      </div>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <div className='modal__video'>
          <ReactPlayer
            width='100%'
            height='100%'
            url={BabyVideo}
            playing={isPlaying}
            controls
            playsinline
            // light={BabyFootball}
            // playIcon={
            //   <button onClick={playVideo} className='play-button'>
            //     <FaPlay />
            //   </button>
            // }
          />
        </div>
      </Modal>
    </>
  );
}

export default Slider;
