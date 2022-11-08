import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// import SharedLayout from 'components/SharedLayout/SharedLayout';
const SharedLayout = lazy(() =>
  import(
    'components/SharedLayout/SharedLayout' /* webpackChunkName: "sharedlayout"*/
  )
);

// import AuthPage from 'pages/AuthPage/AuthPage';
const AuthPage = lazy(() =>
  import(
    'pages/AuthPage/AuthPage' /* webpackChunkName: "authpage"*/
  )
);
// import HomePage from 'pages/HomePage/HomePage';
const HomePage = lazy(() =>
  import(
    'pages/HomePage/HomePage' /* webpackChunkName: "homepage"*/
  )
);
// import GalleryPage from 'pages/GalleryPage/GalleryPage';
const GalleryPage = lazy(() =>
  import(
    'pages/GalleryPage/GalleryPage' /* webpackChunkName: "gallerypage"*/
  )
);

// import OnePokemon from 'components/OnePokemone/OnePokemon';
const OnePokemon = lazy(() =>
  import(
    'components/OnePokemone/OnePokemon' /* webpackChunkName: "onepokemon"*/
  )
);
// import NotFound from 'pages/404/404';
const NotFound = lazy(() =>
  import('pages/404/404' /* webpackChunkName: "404"*/)
);

// import IncludedRouter from 'components/IncludedRouter/IncludedRouter';
const IncludedRouter = lazy(() =>
  import(
    'components/IncludedRouter/IncludedRouter' /* webpackChunkName: "includedrouter"*/
  )
);

const MainRoter = () => {
  return (
    <Routes>
      <Route path='/' element={<SharedLayout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/gallery' element={<GalleryPage />}>
          <Route path='modal' element={<OnePokemon />} />
        </Route>
        <Route path='/auth' element={<AuthPage />} />
        <Route path='/error' element={<NotFound />} />
        <Route path='/router' element={<IncludedRouter />}>
          <Route path='main1' element={<h1>MAIN 1</h1>} />
          <Route path='main2' element={<h1>MAIN 2</h1>} />
        </Route>
        <Route path='*' element={<Navigate to='/auth' />} />
      </Route>
    </Routes>
  );
};

export default MainRoter;
