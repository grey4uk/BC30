import { usePokemonsApi } from 'hooks/usePokemonsApi';
import {
  Link,
  Outlet,
  useLocation,
  // useParams,
  useSearchParams,
} from 'react-router-dom';
const Gallery = () => {
  //   const { pokemon } = useParams();
  const [searchParams] = useSearchParams();
  const pokemon = searchParams.get('query');
  const location = useLocation();
  const pokemons = usePokemonsApi();
  return (
    <>
      <ul>
        {pokemons?.map(({ name }) => (
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
