import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tokenSelector } from 'redux/auth/auth-selectors';
import { getContacts } from 'redux/contacts/contacts-operations';

const HomePage = () => {
  const dispatch = useDispatch();
  const token = useSelector(tokenSelector);
  useEffect(() => {
    token &&
      setTimeout(() => {
        dispatch(getContacts());
      }, 400);
  }, [dispatch, token]);
  return <>Home</>;
};

export default HomePage;
