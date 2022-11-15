import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { authByGoogle } from 'redux/auth/authOperations';

const AuthForm = () => {
  const dispatch = useDispatch();

  const authByGoogleClick = () => {
    // async logic await user
    //     const user = {};
    //     dispatch(authByGoogle(user));
    dispatch(authByGoogle());
  };

  return (
    <Form>
      <Button type='button' onClick={authByGoogleClick}>
        Google authentication
      </Button>
    </Form>
  );
};

export default AuthForm;
