import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    counter: 1,
    value: 1,
  };

  handleAdd = () => {
    const newCounter = this.state.counter + this-this.state.value;

    this.setState({
      counter: newCounter,
    })
  }

  handleSubstract = () => {
    const newCounter = this.state.counter - 1;

    this.setState({
      counter: newCounter,
    })
  }
  handleChange = (e) => {
    this.setState({
      value: Number(e.target.value || 0),
    })
  }

  render(){
    return (
      <div className="App">
        <h2>Contador vale {this.state.counter}</h2>
        <input type="number" value={this.state.value} onChange={this.handleChange}/>
        <div>
          <button onClick={this.handleAdd}>SUMAR</button>
          <button onClick={this.handleSubstract}>RESTAR</button>
        </div>
      </div>
    );
  }
  
}

export default App;
