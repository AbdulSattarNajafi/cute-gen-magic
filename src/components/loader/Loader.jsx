import './loader.css';

function Loader() {
  return (
    <div className='loader'>
      <div className='loader__spinner'>
        <svg
          width='120'
          height='120'
          viewBox='0 0 120 120'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M67.1329 111.071C57.0504 112.464 46.7815 110.835 37.6248 106.391C28.468 101.947 20.8347 94.8876 15.69 86.1054C10.5453 77.3232 8.12044 67.2126 8.72195 57.0523C9.32345 46.8919 12.9243 37.1381 19.0693 29.0243C25.2142 20.9104 33.6271 14.801 43.2443 11.4685C52.8614 8.136 63.2507 7.73017 73.0985 10.3023C82.9463 12.8744 91.8102 18.309 98.5693 25.9188C105.328 33.5286 109.679 42.9718 111.071 53.0542'
            stroke='#6161FF'
            strokeWidth='18'
            strokeLinecap='round'
          />
        </svg>
      </div>
      <h3>Processing</h3>
    </div>
  );
}

export default Loader;
