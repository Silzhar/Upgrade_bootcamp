import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Home</h1>
                <h3>
                    <Link to="/characters">Lista de personajes</Link>
                </h3>
                <h3>
                    <Link to="/register">Registro de usuarios</Link>
                </h3>
                <h3>
                    <Link to="/login">Login de usuarios</Link>
                </h3>
            </div>
        )
    }
}

export default Home;