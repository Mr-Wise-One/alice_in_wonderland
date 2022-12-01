import React, { useContext } from 'react';
import UserContext from '../Hooks/UserContext';
import useWindowSize from '../Hooks/useWindowSize';
import { useForm } from 'react-hook-form';
import { IoWarningOutline } from 'react-icons/io5';
import './Header.scss';

const Header = () => {
  const { showText, setShowText, setMail } = useContext(UserContext);
  const size = useWindowSize();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  const onSubmit = (data) => {
    let trunkNum = 0;
    let userMail = data.email.toLowerCase().trim();

    size.height <= 414 && size.width <= 914 ? (trunkNum = 30) : (trunkNum = 26);

    setMail(
      userMail.length <= trunkNum
        ? userMail
        : userMail.substring(0, trunkNum) + '...'
    );
    setShowText(true);
    setTimeout(() => {
      reset();
    }, 7500);
    setTimeout(() => {
      setShowText(false);
      setMail('');
    }, 8000);
  };

  return (
    <div className='header-container'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='input-box'>
          <input
            type='text'
            required={true}
            autoComplete='off'
            {...register('email', {
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\s*?$/i,
              },
            })}
          />
          <span className='email'>Email</span>
          {errors?.email && <IoWarningOutline className='error' />}
          <div
            className='shutter-box'
            style={{ display: `${showText ? 'block' : 'none'}` }}
          >
            <span className={`shutter${showText && ' show'}`}></span>
          </div>
        </div>
        <div className='button-container'>
          <span className='mas'>SUBSCRIBE</span>
          <button id='subscribe' type='submit' disabled={showText}>
            SUBSCRIBE
          </button>
        </div>
      </form>
    </div>
  );
};

export default Header;
