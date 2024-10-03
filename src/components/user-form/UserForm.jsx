import './user-form.css';

function UserForm() {
  return (
    <form className='form'>
      <div className='form__row'>
        <label htmlFor='email'>Contact Email Address:</label>
        <input type='text' id='email' />
      </div>
      <div className='form__row'>
        <label htmlFor='video'>Video Description:</label>
        <textarea name='video' id='video'></textarea>
      </div>
      <div className='form__row'>
        <label htmlFor='image-1'>Image Description 1:</label>
        <textarea name='image-1' id='image-1'></textarea>
      </div>
      <div className='form__row'>
        <label htmlFor='image-2'>Image Description 2:</label>
        <textarea name='image-2' id='image-2'></textarea>
      </div>
      <div className='form__row'>
        <label htmlFor='image-3'>Image Description 3:</label>
        <textarea name='image-3' id='image-3'></textarea>
      </div>
    </form>
  );
}

export default UserForm;
