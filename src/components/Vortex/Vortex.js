import React, { useContext } from 'react';
import UserContext from '../Hooks/UserContext';
import useWindowSize from '../Hooks/useWindowSize';
import useOperationSystem from '../Hooks/useOperationSystem';
import './Vortex.scss';

const Vortex = () => {
  let range = 0;
  const size = useWindowSize();
  const os = useOperationSystem();

  const { showText, mail } = useContext(UserContext);

  return (
    <>
      <div className='img-box'>
        <div className='image'></div>
      </div>
      {os !== 'iOS' ? (
        <div className={`wrapper${showText && ' show-text'}`}>
          {mail.split('').map((l, i) => (
            <div
              className='text'
              key={i + l}
              style={{
                offsetDistance: `${
                  (size.width <= 414 && size.height <= 914) ||
                  (size.height <= 414 && size.width <= 914)
                    ? ['@', 'm', 'w'].includes(mail[i]) ||
                      ['@', 'm', 'w'].includes(mail[i - 1])
                      ? (range = range + 14)
                      : mail[i] === '.' || mail[i - 1] === '.'
                      ? (range = range + 7)
                      : (range = range + 8)
                    : ['@', 'm', 'w'].includes(mail[i]) ||
                      ['@', 'm', 'w'].includes(mail[i - 1])
                    ? (range = range + 17)
                    : mail[i] === '.' || mail[i - 1] === '.'
                    ? (range = range + 9)
                    : (range = range + 11)
                }px`,
                animationDelay: `${-i * 80 + 3500}ms`,
              }}
            >
              <span className='show-text'>{l}</span>
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default Vortex;
