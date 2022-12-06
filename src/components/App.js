import React, { useState, useEffect } from 'react';
import UserContext from './Hooks/UserContext';
import LoadingScreen from './LoadingScreen/LoadingScreen';
import Vortex from './Vortex/Vortex';
import Header from './Header/Header';
import './App.scss';

const App = () => {
  const [showText, setShowText] = useState(false);
  const [loading, setLoading] = useState(true);
  const [mail, setMail] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 7500);
  }, []);

  return (
    <div className='app'>
      <UserContext.Provider
        value={{ showText, loading, mail, setShowText, setMail }}
      >
        <LoadingScreen />
        <div className='content'>
          <Header />
          <Vortex />
        </div>
      </UserContext.Provider>
    </div>
  );
};

export default App;
