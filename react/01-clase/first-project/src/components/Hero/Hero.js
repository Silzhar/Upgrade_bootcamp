import React from 'react';

import './Hero.css';

const TITLE = 'Welcome to Upgrade Hub';

class Hero extends React.Component{
    render(){
        return(
            <section className="Hero">
                <h1>{TITLE}</h1>
            </section>
        );
    }
}

export default Hero;