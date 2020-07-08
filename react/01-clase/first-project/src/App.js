import React from 'react';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/index';
// import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <h1>Upgrade-Hub</h1>
//       <p>Primer projecto de React!</p>
//     </div>
//   );
// }     Esto es igual a la clase inferior.

class App extends React.Component {
  render(){
    return(
      <div className="App">
        <Navbar></Navbar>
        <Hero />
        <h1>Upgrade-Hub</h1>
        <p className="blod">Primer projecto de React!</p>
      </div>
    );
  }
}
export default App;
