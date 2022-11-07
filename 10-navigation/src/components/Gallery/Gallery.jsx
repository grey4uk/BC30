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

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then((r) => r.json())
      .then((r) =>
        setPokemons(r.results.map((el) => el.name))
      );
  }, []);
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
