import React from 'react';
import './App.scss';
import { getBaseData, getDataFromUrl } from './services/rickMorty'

class App extends React.Component {
  state = {
    characters: [],
    nextPage: null,
  }

  async componentDidMount() {
    const baseData = await getBaseData();

    this.setState({
      characters: baseData.results,
      nextPage: baseData.nextPage,
    })
  }

  handleLoadData = async() => {
    const dataFromUrl = await getDataFromUrl(this.state.nextPage);

    this.setState((prevState) => ({
      characters: [...prevState.characters ,...dataFromUrl.results],
      nextPage: dataFromUrl.nextPage,
    }))
  }

  render(){
    console.log(this.state)
    return (
      <div className="App">
        <h1>Rick y Morty</h1>

        <div>
          <ul>
          {this.state.characters.map((char) => {
            return <li key={char.id}>
              <h3>Nombre: {char.name}</h3>
              <img src={char.image} alt=""/>
            </li>
          })}
          </ul>

          <button onClick={ this.handleLoadData }>Cargar más</button>
        </div>
      </div>
    );
  }
  
}

export default App;
