import Modal from 'components/Modal/Modal';
import { Component } from 'react';

class PokemonsList extends Component {
  state = { pokemons: [], pokemon: '', county: 3 };

  toggleModal = (name) => {
    this.setState({ pokemon: name ? name : '' });
  };

  componentDidMount() {
    this.getPokemons();
  }

  getPokemons() {
    const { county } = this.state;
    fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${county}`
    )
      .then((res) => res.json())
      .then((res) =>
        this.setState({ pokemons: res.results })
      );
  }

  componentDidUpdate(_, prevState) {
    const prevCounty = prevState.county;
    const nextCounty = this.state.county;
    prevCounty !== nextCounty && this.getPokemons();
  }

  render() {
    const {
      toggleModal,
      state: { pokemon, pokemons },
    } = this;
    return (
      <>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.setState({
              county: Number(
                e.currentTarget.elements.county.value
              ),
            });
          }}>
          <input
            type='number'
            id='county'
            placeholder='Enter county of pokemons to find...'
          />
        </form>
        <ul>
          {pokemons.map(({ name }) => (
            <li key={name}>
              <h3 onClick={() => toggleModal(name)}>
                {name}
              </h3>
              {pokemon && pokemon === name && (
                <Modal
                  onClose={toggleModal}
                  pokemon={pokemon}
                />
              )}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default PokemonsList;
