import React from 'react';

import './Navbar.css';


// Suponemos que este valor viene de una API
const language = 'es';

const spanishTitle = 'Bievenid@ a mi perfil!';
const englishTitle = 'Welcome to my profile!';

// const navbarLinks = ['Home', 'About', 'Account'];

class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <h1>{language === 'es' ? spanishTitle : englishTitle}</h1>

        
      </nav>
    );
  }
}

export default Navbar;
