import Loader from 'components/Loader/Loader';
import Notiflix from 'notiflix';
import { Component } from 'react';
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

class ItemsList extends Component {
  state = {
    items: [],
    county: 1,
    isRun: false,
    isLoading: false,
    error: '',
    status: STATUSES.IDLE,
  };

  componentDidMount() {
    this.fetchImages();
  }

  async fetchImages() {
    const { county } = this.state;
    if (!county) return;
    try {
      this.setState({
        isLoading: true,
        error: '',
        status: STATUSES.PENDING,
      });
      const items = await getImages(county);
      Notiflix.Notify.success('Yahoo!!!', {
        timeout: 3000,
      });

      this.setState((prev) => ({
        items: [...prev.items, ...items],
        status: STATUSES.SUCCESS,
      }));
    } catch (error) {
      this.setState({
        error: 'Error',
        status: STATUSES.ERROR,
      });
    } finally {
      setTimeout(() => {
        this.setState({
          isLoading: false,
        });
      }, 500);
    }
  }

  handleSubmitInput = (e) => {
    e.preventDefault();
    const elements = e.currentTarget.elements;
    //     console.log('elemants :>> ', elements);
    const { value } = elements.county;

    this.setState({
      county: Number(value),
      isRun: !this.state.isRun,
    });
  };

  componentDidUpdate(_, prevState) {
    const nextError = this.state.error;
    const prevError = prevState.error;
    if (prevState.isRun !== this.state.isRun) {
      this.fetchImages();
    }
    if (nextError && nextError !== prevError) {
      Notiflix.Notify.failure(nextError, {
        timeout: 3000,
      });
    }
  }

  render() {
    const {
      items,
      //  isLoading,
      status,
    } = this.state;
    const { handleSubmitInput } = this;
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
  }
}

export default ItemsList;
