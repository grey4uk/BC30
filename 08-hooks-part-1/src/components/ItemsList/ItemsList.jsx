import Loader from 'components/Loader/Loader';
import { useLocalStorageHook } from 'hooks/useLocalStorageHook';
import Notiflix from 'notiflix';
import { useCallback } from 'react';
import { useState, useEffect } from 'react';
import {
  Button,
  Card,
  Form,
  InputGroup,
} from 'react-bootstrap';
import { getImages } from 'services/api';

const STATUSES = {
  IDLE: 'IDLE',
  ERROR: 'ERROR',
  SUCCESS: 'SUCCESS',
  PENDING: 'PENDING',
};

const itemsKeyStorage = 'ITEMS';

const ItemsList = () => {
  const [items, setItems] = useLocalStorageHook({
    key: itemsKeyStorage,
    inititialValue: [],
  });
  // const [items, setItems] = useState([]);
  const [county, setCounty] = useState(1);
  const [isRun, setIsRun] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [status, setStatus] = useState(STATUSES.IDLE);

  const fetchImages = useCallback(
    async function fetchImages() {
      if (
        !county ||
        (items.length && status === STATUSES.IDLE)
      ) {
        setStatus(STATUSES.SUCCESS);
        return;
      }
      try {
        setIsLoading(true);
        setError('');
        setStatus(STATUSES.PENDING);
        const items = await getImages(county);
        Notiflix.Notify.success('Yahoo!!!', {
          timeout: 3000,
        });
        setItems((prev) => [...prev, ...items]);
        setStatus(STATUSES.SUCCESS);
      } catch (error) {
        setError('Error');
        setStatus(STATUSES.ERROR);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      }
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [county, isRun]
  );

  // useEffect(() => {
  //   fetchImages();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  const handleSubmitInput = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const elements = form.elements;
    //     console.log('elemants :>> ', elements);
    const { value } = elements.county;
    setCounty(Number(value));
    setIsRun((prev) => !prev);
    form.reset();
  };

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  useEffect(() => {
    error &&
      Notiflix.Notify.failure(error, {
        timeout: 3000,
      });
  }, [error]);

  //componentDidMount
  // useEffect(() => {
  //   first
  // }, [])
  //componentDidUpdate
  // useEffect(() => {
  //   first
  // }, [second])
  //componentWillUnmount
  // useEffect(() => {
  //   first
  // return ()=>{third}
  // }, [second])
  console.log('re-render');
  return (
    <>
      <Form onSubmit={handleSubmitInput}>
        <InputGroup className='mb-3'>
          <InputGroup.Text id='basic-addon1'>
            <img
              src='https://static.thenounproject.com/png/677988-200.png'
              alt='find'
              height='24'
            />
          </InputGroup.Text>

          <Form.Control
            placeholder='Enter images county'
            aria-label='County'
            id='county'
            type='number'
          />
        </InputGroup>
      </Form>
      {status === STATUSES.SUCCESS && (
        <ol>
          {items.map((item, index) => (
            <li key={item}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant='top' src={item} />
                <Card.Body>
                  <Card.Title>{`Dog #${
                    index + 1
                  }`}</Card.Title>

                  <Button variant='primary'>
                    Go somewhere
                  </Button>
                </Card.Body>
              </Card>
            </li>
          ))}
        </ol>
      )}
      {status === STATUSES.PENDING && <Loader />}
      {/* {(status === STATUSES.PENDING||isLoading )&& <Loader />} */}
    </>
  );
};

export default ItemsList;
