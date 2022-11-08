import axios from 'axios';
import { useEffect, useState } from 'react';

const pokemonApiInstance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon',
});

const getPokemons = async () => {
  //   try {
  //     const { data } = await pokemonApiInstance.get('');
  //     return data.results;
  //   } catch (error) {
  //     throw new Error(error.message);
  //   }
  const { data } = await pokemonApiInstance.get('');
  return data.results;
};

const getOnePokemon = async (name) => {
  //   try {
  //     const { data } = await pokemonApiInstance.get('');
  //     return data.results;
  //   } catch (error) {
  //     throw new Error(error.message);
  //   }
  const { data } = await pokemonApiInstance.get(`/${name}`);
  return data;
};

export const usePokemonsApi = (name) => {
  const [result, setResult] = useState(name ? {} : []);
  useEffect(() => {
    (async () => {
      const res = !name
        ? await getPokemons()
        : await getOnePokemon(name);
      res && setResult(res);
    })();
  }, [name]);

  return result;
};
