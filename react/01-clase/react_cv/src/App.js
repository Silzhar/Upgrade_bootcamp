import React from 'react';

import Navbar from './components/Navbar';

import Header from './components/Header';
import LeftSection from './components/LeftSection';
import RightSection from './components/RightSection';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Navbar />

      <div className="App__sections">
        <LeftSection></LeftSection>
        <RightSection></RightSection>
      </div>
      
    </div>
  );
}

export default App;
