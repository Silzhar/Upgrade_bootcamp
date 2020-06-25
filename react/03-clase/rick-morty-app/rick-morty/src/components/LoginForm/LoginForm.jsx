import React, { Component } from 'react';

import { register } from '../../api/authentication';

import './LoginForm.scss';

export default class LoginForm extends Component {
  state = {
    form: {
    email: '',
    password: '',
    },
    error: null,
  };

  handleSubmit = async (event) => {
    event.prevetDefault();
    // console.log('Submmitting form');
    
    try {
        const data = await register(this.state.form);
        console.log(data);

    } catch (err) {
        console.log(err.message);
    }
  };

  handleOnChange = (event) => {
    // Sacar name y value de event.target.
    const { name, value }= event.target;
    
    this.setState((prevState) => ({
      form: {
        ...prevState,
        [name]: value,
      }
    }));
};

  render() {
    const { form, error } = this.state;
      const { email, password } = form;
      const isDisabled =  !email || !password;

    return (
      <form className="LoginForm" onSubmit={this.handleSubmit}>

        <label htmlFor="email" className="LoginForm_label">
          <p>Correo electrónico:</p>
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleOnChange}
          />
        </label>

        <label htmlFor="password" className="LoginForm_label">
          <p>Correo electrónico:</p>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleOnChange}
          />
        </label>

        {error ? <p className="LoginForm_error">{error}</p> : null }

        <button className="LoginForm_button" 
        type="submit" disabled={isDisabled} 
        >Inicio de sesión</button>
      </form>
    );
  }
}
