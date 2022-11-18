import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { signUpUser } from 'redux/auth/auth-operations';

const AuthForm = () => {
  const dispatch = useDispatch();
  const submit = (e) => {
    e.preventDefault();
    const { name, email, password } =
      e.currentTarget.elements;
    const user = {
      name: name.value,
      email: email.value,
      password: password.value,
    };
    dispatch(signUpUser(user));
    e.target.reset();
  };
  return (
    <Form onSubmit={submit}>
      <Form.Group className='mb-3'>
        <Form.Label>Name</Form.Label>
        <Form.Control
          name='name'
          type='name'
          placeholder='Enter name'
        />
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Label>Email address</Form.Label>
        <Form.Control
          name='email'
          type='email'
          placeholder='Enter email'
        />
        <Form.Text className='text-muted'>
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label>Password</Form.Label>
        <Form.Control
          name='password'
          type='password'
          placeholder='Password'
        />
      </Form.Group>

      <Button variant='primary' type='submit'>
        Submit
      </Button>
    </Form>
  );
};

export default AuthForm;
