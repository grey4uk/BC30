import { usePokemonsApi } from 'hooks/useApi';
import { Fragment, useEffect } from 'react';
import {
  Link,
  useLocation,
  //   useParams,
  useSearchParams,
} from 'react-router-dom';

const OnePokemon = () => {
  //   const { pokemon } = useParams();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const name = searchParams.get('query');
  console.log('name :>> ', name);
  usePokemonsApi(name).then(console.log);

  // const name = location.state?.name;
  const from = location.state?.from ?? '/gallery/list';

  // console.log('location', location);
  console.log('One Pokemon');
  return (
    <Fragment>
      <h3>This is {name}</h3>
      <img src={null} alt={''} width='400' />
      <Link to={from}>Close</Link>
    </Fragment>
  );
};

export default OnePokemon;
