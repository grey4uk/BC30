import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import AuthPage from 'pages/AuthPage/AuthPage';
import ChatPage from 'pages/ChatPage/ChatPage';

const App = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
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
