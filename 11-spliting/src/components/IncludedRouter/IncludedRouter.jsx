import {
  //   Route,
  //   Routes,
  Link,
  Outlet,
} from 'react-router-dom';

const IncludedRouter = () => {
  return (
    <>
      <Link to='main1'>Main1</Link>
      <Link to='main2'>Main2</Link>
      <Outlet />
      {/* <Routes>
        <Route path='main1' element={<h1>MAIN 1</h1>} />
        <Route path='main2' element={<h1>MAIN 2</h1>} />
      </Routes> */}
    </>
  );
};

export default IncludedRouter;
