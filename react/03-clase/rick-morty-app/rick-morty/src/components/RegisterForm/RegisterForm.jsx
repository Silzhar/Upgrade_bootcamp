import React, { Component } from 'react';

import { register } from '../../api/authentication';

import './RegisterForm.scss';

export default class RegisterForm extends Component {
  state = {
    form: {
      username: '',
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
      const { username, email, password } = form;
      const isDisabled = !username || !email || !password;

    return (
      <form className="RegisterForm" onSubmit={this.handleSubmit}>
        <label htmlFor="username" className="RegisterForm_label">
          <p>Usuario:</p>
          <input
            type="text"
            name="username"
            value={username}
            onChange={this.handleOnChange}
          />
        </label>

        <label htmlFor="email" className="RegisterForm_label" placeholder="EMail">
          <p>Correo electrónico:</p>
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleOnChange}
          />
        </label>

        <label htmlFor="password" className="RegisterForm_label" placeholder="Password">
          <p>Contraseña:</p>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleOnChange}
          />
        </label>

        {error ? <p className="RegisterForm_error">{error}</p> : null }

        <button className="RegisterForm_button" 
        type="submit" disabled={isDisabled} 
        >Registro</button>
      </form>
    );
  }
}
