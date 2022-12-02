import React, { useState } from 'react';
import UserContext from './Hooks/UserContext';
import Vortex from './Vortex/Vortex';
import Header from './Header/Header';
import './App.scss';

const App = () => {
  const [showText, setShowText] = useState(false);
  const [mail, setMail] = useState('');

  return (
    <section className='app'>
      <UserContext.Provider value={{ showText, setShowText, mail, setMail }}>
        <Header />
        <Vortex />
      </UserContext.Provider>
    </section>
  );
};

export default App;
