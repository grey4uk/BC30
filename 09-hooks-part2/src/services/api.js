import axios from 'axios';

const instanceAxiosImages = axios.create({
  baseURL: 'https://dog.ceo/api/breeds/image/random',
});
// const instanceAxiosPokemons = axios.create({
//   baseURL: 'https://pokeapi.co/api/v2/pokemon',
// });

// const token = {
//   set(token) {
//     instanceAxiosImages.defaults.headers.common[
//       'Authorization'
//     ] = `Bearer ${token}`;
//   },
//   unset() {
//     instanceAxiosImages.defaults.headers.common[
//       'Authorization'
//     ] = '';
//   },
// };
const setRequest = ({ endpoint, params }) =>
  instanceAxiosImages({ url: endpoint, params });

export const getImages = async (county = '1') => {
  const { data } = await setRequest({
    endpoint: `/${county}`,
    params: {},
  });
  return data.message;
};
