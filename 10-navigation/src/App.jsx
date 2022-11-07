import { Routes, Route, Navigate } from 'react-router-dom';
import AuthPage from 'pages/AuthPage/AuthPage';
import HomePage from 'pages/HomePage/HomePage';
import GalleryPage from 'pages/GalleryPage/GalleryPage';
import Navigator from 'components/Navigator/Navigator';
import OnePokemon from 'components/OnePokemone/OnePokemon';
import NotFound from 'pages/404/404';

const App = () => {
  return (
    <>
      <Navigator />
      <Routes>
        <Route path='home' element={<HomePage />} />
        <Route path='gallery' element={<GalleryPage />}>
          <Route path='modal' element={<OnePokemon />} />
        </Route>
        <Route path='auth' element={<AuthPage />} />
        <Route path='error' element={<NotFound />} />
        <Route path='*' element={<Navigate to='/auth' />} />
      </Routes>
    </>
  );
};

export default App;
