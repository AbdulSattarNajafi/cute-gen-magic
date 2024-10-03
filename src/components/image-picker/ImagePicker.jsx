import { useState } from 'react';
import { FaPlus } from 'react-icons/fa6';
import './image-picker.css';

const ImagePicker = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  console.log(selectedImage);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
      setSelectedImage(file);
    }
  };

  const handleImageRemove = () => {
    setSelectedImage(null);
    setImagePreview(null);
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

export default ImagePicker;
