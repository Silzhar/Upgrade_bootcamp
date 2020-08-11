import React, { Component } from 'react';


class Counter extends Component {
    // Siempre poner super(props) para que nuestra clase se comporte como un React.Component
  constructor(props) {
    super(props);
  
    this.state = {
      counter: 1,
      value: 1,
    };
  }

  handleAdd = (e) => {
    const newCounter = this.state.counter + this.state.value;

    this.setState({
      counter: newCounter,
    })
  }

  handleSubstract = (e) => {
    const newCounter = this.state.counter - this.state.value;

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

export default Counter;
