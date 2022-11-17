import AuthPage from 'pages/AuthPage';
import HomePage from 'pages/HomePage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Navigate,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom';
import { refreshCurrentUser } from 'redux/auth/auth-operations';
import {
  isLoggedInSelector,
  tokenSelector,
} from 'redux/auth/auth-selectors';

const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(isLoggedInSelector);
  const token = useSelector(tokenSelector);
  useEffect(() => {
    token && dispatch(refreshCurrentUser());
  }, [dispatch, token]);
  return (
    <Routes>
      <Route path='/' element={<Outlet />}>
        <Route
          index
          element={
            isLoggedIn ? (
              <Navigate to='home' />
            ) : (
              <AuthPage />
            )
          }
        />
        <Route
          path='home'
          element={
            isLoggedIn ? (
              <HomePage />
            ) : (
              <Navigate to='home' />
            )
          }
        />
        <Route path='*' element={<Navigate to='/' />} />
      </Route>
    </Routes>
  );
};

export default App;
