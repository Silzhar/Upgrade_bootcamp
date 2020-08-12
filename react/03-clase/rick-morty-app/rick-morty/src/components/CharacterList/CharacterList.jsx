import React, { Component } from 'react';

import { getBaseData, getDataFromUrl } from '../../services/rickMorty';

class CharacterList extends Component {
  state = {
    characters: [],
    nextPage: null,
  };

  async componentDidMount() {
    const baseData = await getBaseData();

    this.setState({
      characters: baseData.results,
      nextPage: baseData.nextPage,
    });
  }

  handleLoadData = async () => {
    const dataFromUrl = await getDataFromUrl(this.state.nextPage);

    this.setState((prevState) => ({
      characters: [...prevState.characters, ...dataFromUrl.results],
      nextPage: dataFromUrl.nextPage,
    }));
  };
  render() {
    return (
      <div>
        <ul>
          {this.state.characters.map((char) => {
            return (
              <li key={char.id}>
                <h3>Nombre: {char.name}</h3>
                <img src={char.image} alt="" />
              </li>
            );
          })}
        </ul>

        <button onClick={this.handleLoadData}>Cargar más</button>
      </div>
    );
  }
}

export default CharacterList;
