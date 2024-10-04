import { useState } from 'react';
import { FaPlus } from 'react-icons/fa6';
import PropTypes from 'prop-types';
import './image-picker.css';

const ImagePicker = ({ onImageSelected }) => {
  const [, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
      setSelectedImage(file);
      onImageSelected(file);
    }
  };

  const handleImageRemove = () => {
    setSelectedImage(null);
    setImagePreview(null);
    onImageSelected(null);
  };

  return (
    <div className='image-picker'>
      <input
        className='image-picker__input'
        type='file'
        accept='image/*'
        onChange={handleImageChange}
      />
      <div className='image-picker__add'>
        <span>
          <FaPlus />
        </span>
        <p>tap to add photo</p>
      </div>
      {imagePreview && (
        <div className='image-picker__image'>
          <img src={imagePreview} alt='Selected' />
          <button onClick={handleImageRemove}>Remove</button>
        </div>
      )}
    </div>
  );
};

ImagePicker.propTypes = {
  onImageSelected: PropTypes.func.isRequired,
};

export default ImagePicker;
