import { FaArrowRight, FaPlay, FaChevronRight } from 'react-icons/fa6';
import ReactPlayer from 'react-player';
import { default as SlickSlider } from 'react-slick';
import { useState } from 'react';
import './slider.css';

import Modal from '../modal/Modal';
import useSteps from '../../hooks/useSteps';
import AiIcon from './../../assets/icons/ai.png';

import Baby from './../../assets/images/baby.png';
import Football from './../../assets/images/football-2.png';

import Baby1 from './../../assets/images/reference-image.jpg';
import Baby2 from './../../assets/images/reference-image2.jpg';
import Baby3 from './../../assets/images/reference-image3.jpg';

import Baby4 from './../../assets/images/football.jpg';
import Baby5 from './../../assets/images/swat.jpg';
import Baby6 from './../../assets/images/soccor.jpg';
import Baby7 from './../../assets/images/hockey.jpg';

import BabyVideo from './../../assets/videos/football.mp4';
import BabyVideo2 from './../../assets/videos/swat.mp4';
import BabyVideo3 from './../../assets/videos/soccor.mp4';
import BabyVideo4 from './../../assets/videos/hockey.mp4';

// const sliderImages = [Baby1, Baby3, Baby2];
const sliderItems = [Baby4, Baby5, Baby6, Baby7];
const sliderVideos = [BabyVideo, BabyVideo2, BabyVideo3, BabyVideo4];

function Slider() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isPlayingMini, setIsPlayingMini] = useState(false);
  const [showModalMini, setShowModalMini] = useState(false);
  const [miniVideoIndex, setMiniVideoIndex] = useState(0);
  const { openSteps } = useSteps();
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeBeforeSlide, setActiveBeforeSlide] = useState(0);

  function playVideo() {
    setIsPlaying(true);
    setShowModal(true);
    console.log(activeBeforeSlide);
  }

  function playVideoMini(index) {
    setIsPlayingMini(true);
    setShowModalMini(true);
    setMiniVideoIndex(index);
  }

  const sliderBefor = {
    className: 'slider__before-slider',
    dots: false,
    slidesToShow: 3,
    rtl: true,
    autoplay: false,
    arrows: false,
    // swipeToSlide: true,
    // slidesToScroll: 1,
    initialSlide: 2,
    beforeChange: (current, next) => {
      setActiveBeforeSlide(next);
    },
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
    // centerMode: true,
    // variableWidth: true,
    autoplay: false,
    arrows: false,
    swipeToSlide: true,
    slidesToScroll: 1,
    initialSlide: 0,
    beforeChange: (current, next) => {
      setActiveSlide(next);
    },
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
                {/* <img src={sliderImages[activeBeforeSlide]} alt='image' /> */}
                <img src={Baby} alt='image' />
              </div>
              <div className='preview__image-transformed'>
                {/* <img src={sliderItems[activeSlide]} alt='image' /> */}
                <img src={Football} onClick={playVideo} alt='image' />
                <button onClick={playVideo} className='play-button'>
                  <FaPlay />
                </button>
                <div className='preview__image-overlay'></div>
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
              {sliderItems.map((item, i) => (
                <div key={i}>
                  <div className='slider__after-item'>
                    <div className='slider__after-image'>
                      <img src={item} alt='Baby ' />
                      {i !== 0 && (
                        <button onClick={() => playVideoMini(i)} className='slider__after-btn'>
                          <FaPlay />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </SlickSlider>
          </div>
        </div>
      </div>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <div className='modal__video'>
          <ReactPlayer
            width='100%'
            height='100%'
            url={sliderVideos[activeSlide]}
            playing={isPlaying}
            controls
            playsinline
          />
        </div>
      </Modal>

      <Modal isOpen={showModalMini} onClose={() => setShowModalMini(false)}>
        <div className='modal__video'>
          <ReactPlayer
            width='100%'
            height='100%'
            url={sliderVideos[miniVideoIndex]}
            playing={isPlayingMini}
            controls
            playsinline
          />
        </div>
      </Modal>
    </>
  );
}

export default Slider;
