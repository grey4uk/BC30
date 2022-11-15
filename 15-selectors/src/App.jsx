import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import AuthPage from 'pages/AuthPage/AuthPage';
import ChatPage from 'pages/ChatPage/ChatPage';
import { isLoggedInSelector } from 'redux/selectors';

const App = () => {
  // const isLoggedIn = useSelector(state=>isLoggedInSelector(state));

  const isLoggedIn = useSelector(isLoggedInSelector);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',

        width: '100vw',
      }}>
      {isLoggedIn ? <ChatPage /> : <AuthPage />}
      <ToastContainer />
    </div>
  );
};

export default App;
