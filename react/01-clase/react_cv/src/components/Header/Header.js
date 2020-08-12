import React from 'react';

import './Header.css';
import '../LeftSection/index'

const imgUrl = 
"https://raw.githubusercontent.com/Silzhar/cv-html/master/img/boootcamp-pic.jpeg";

class Header extends React.Component{
    render(){
        return (
            <header className="Header">
                <img className="Header_avatar" src={imgUrl} alt="" srcset=""/>

                <ul className="Header_list">
                    <li>Luis Ruiz Fernández</li>
                    <li>  -- </li>
                    <li>luis.ruizfer@gmail.com</li>
                </ul>
            </header>
        )
    }
}

export default Header;