import React from 'react';

import './LeftSection.css';


class LeftSection extends React.Component {
    render() {
        return(
            <section className="LeftSection">
              <p className="intro">
                Desde que descubrí la programación dedico todo el tiempo posible a aprender,
                es algo que me resulta a la par interesante y entretenido. 
                Mi intención es formarme y realizarme en esta profesión.
              </p>
        <article className="formacion">
          <h2 className="sections">FORMACION</h2>

          <p>
            Bootcamp FullStack (Upgrade-Hub) Noviembre 2019 - Julio 2020
          </p>
          <p>
            Bootcamp aprende a programar desde cero (KeepCoding) Julio - Septiembre 2019
          </p>
          <p>
            Curso Fundamentos de la Programación de Python (KeepCoding) Marzo - Junio 2019
          </p>
          <p>
            Curso Programación moderna con Python (KeepCoding) Enero - Marzo 2019
          </p>
          <p>
            Curso Lua (KeepCoding) Noviembre - Diciembre 2018
          </p>
        </article>
        <article className="tools">
          <h2 className="sections">CONOCIMIENTOS</h2>

          <ul className="listOne">
            <li>JavaScript</li>
            <li>Html5</li>
            <li>CSS</li>
            <li>React</li>
            <li>Angular</li>
            <li>Python</li>
            <li>NodeJS</li>
            <li>PHP</li>
          </ul>
          <ul className="listTwo">
            <li>Git</li>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>Docker</li>
            <li>Ubuntu, Linux</li>
            <li>Lua</li>
            <li>POO</li>
            <li>Visual Studio Code</li>
          </ul>
          
        </article>
        <article className="links">
            <h2 className="sections">ENLACES</h2>
            <a href="https://www.linkedin.com/in/luisruizfer/" className="links_item">LinkedIn</a>
            |
            <a href="https://github.com/Silzhar" className="links_item">GitHub</a>
            |
            <a href="https://gitlab.com/Silzhar" className="links_item">GitLab</a>
        </article>

      </section>
    );

    }
}

export default LeftSection;
