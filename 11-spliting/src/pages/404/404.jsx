import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>404, not found</h1>
      <button
        type='button'
        onClick={() => {
          navigate('/home');
        }}>
        Go Home
      </button>
    </>
  );
};

export default NotFound;
