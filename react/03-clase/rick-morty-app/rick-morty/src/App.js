import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.scss';

import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import { checkSession } from './api/authentication';
import Home from './components/Home/Home';
import CharacterList from './components/CharacterList';

class App extends React.Component {
  hancleOnCLick = async () => {
    try {
      const data = await checkSession();
      console.log('User :', data);
    } catch (err) {
      console.log(err.message);
    }
  };

  render() {
    console.log(this.state);
    return (
      <Router>
        <div className="App">
          <h1>Rick y Morty</h1>
          <Switch>
            <Route path="/characters" exact component={CharacterList} />
            <Route path="/register" exact component={RegisterForm} />
            <Route path="/login" exact component={LoginForm} />
            <Route path="/" exact component={Home} />
          </Switch>
          {/* <RegisterForm /> */}

          <button onClick={this.hancleOnCLick}>Comprobar sessión</button>
        </div>
      </Router>
    );
  }
}

export default App;
