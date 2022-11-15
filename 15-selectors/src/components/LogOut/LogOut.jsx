import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';

const LogOut = () => {
  const dispatch = useDispatch();

  return (
    <Button
      type='button'
      onClick={() => dispatch(logOut())}>
      LogOut
    </Button>
  );
};

export default LogOut;
