import React, { useContext } from 'react';
import UserContext from '../Hooks/UserContext';
import './LoadingScreen.scss';

const LoadingScreen = () => {
  const { loading } = useContext(UserContext);

  return (
    <section className={`loading-screen ${!loading ? 'hide-screen' : null}`}>
      <div className='header'>
        <h1>Welcome to the rabbit hole.. Await further instructions.</h1>
      </div>
      <div className='gif-box'>
        <div className='rabbit'></div>
        <div className='rabbit'></div>
      </div>
      <div className='container'>
        <div className='circle'>
          {Array.from({ length: 21 }, (v, i) => i).map((sI) => (
            <span style={{ '--sI': sI }} key={'circle-1' + sI}></span>
          ))}
        </div>
        <div className='circle'>
          {Array.from({ length: 21 }, (v, i) => i).map((sI) => (
            <span style={{ '--sI': sI }} key={'circle-2' + sI}></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoadingScreen;
