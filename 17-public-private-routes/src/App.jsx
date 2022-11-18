import { PrivateRoute } from 'components/PrivateRoute/PrivateRoute';
import PublicRoute from 'components/PublicRoute/PublicRoute';
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
  // console.log('this :>> ', this);
  const dispatch = useDispatch();

  const token = useSelector(tokenSelector);
  useEffect(() => {
    token && dispatch(refreshCurrentUser());
  }, [dispatch, token]);
  return (
    <Routes>
      <Route path='/' element={<Outlet />}>
        <Route index element={<Navigate to='/auth' />} />
        <Route
          path='auth'
          element={
            <PublicRoute
              Component={<AuthPage />}
              restricted
              redirectTo='/home'
            />
          }
        />
        <Route
          path='home'
          element={
            <PrivateRoute redirectTo='/auth'>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path='*' element={<Navigate to='/' />} />
      </Route>
    </Routes>
  );
};

export default App;
