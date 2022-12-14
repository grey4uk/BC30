import { usePokemonsApi } from 'hooks/useApi';
import { useEffect, useState } from 'react';
import {
  Link,
  Outlet,
  useLocation,
  useParams,
  useSearchParams,
} from 'react-router-dom';
const Gallery = () => {
  const [pokemons, setPokemons] = useState([]);
  //   const { pokemon } = useParams();
  const [searchParams] = useSearchParams();
  const pokemon = searchParams.get('query');
  const location = useLocation();
  usePokemonsApi()
    .then((r) => setPokemons(r.map((el) => el.name)))
    .catch((err) => console.log(err.message));

  // useEffect(() => {
  //   getPokemons()
  //     .then((r) => setPokemons(r.map((el) => el.name)))
  //     .catch((err) => console.log(err.message));
  // }, []);
  return (
    <>
      <ul>
        {pokemons.map((name) => (
          <li key={name}>
            <Link
              to={`modal?query=${name}`}
              state={{
                name,
                from:
                  location.state?.from ?? location.pathname,
              }}>
              <h2>{name}</h2>
            </Link>
            {name === pokemon && <Outlet />}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Gallery;
