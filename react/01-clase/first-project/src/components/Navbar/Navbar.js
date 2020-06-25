import React from 'react';

import './styles.css';

class Navbar extends React.Component {
    render (){
        return <nav className="Navbar">
            <h3>Upgrade Hub</h3>
            
            <ul className="Navbar__list">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                <a href="#">About</a>
                </li>
                <li>
                <a href="#">Contact</a>
                </li>

            </ul>
        </nav>
    }
}

export default Navbar;
