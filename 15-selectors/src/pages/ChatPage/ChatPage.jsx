import { useEffect } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Counter from 'components/Counter/Counter';
import Greeting from 'components/Greeting/Greeting';
import LogOut from 'components/LogOut/LogOut';
import { getChat } from 'redux/chat/chatOperations';
import { userNameSelector } from 'redux/selectors';
import ChatForm from 'components/ChatForm/ChatForm';
import ChatList from 'components/ChatList/ChatList';

const ChatPage = () => {
  const userName = useSelector((state) =>
    userNameSelector(state)
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getChat());
  }, [dispatch]);

  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand href='#home'>Chat</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className='justify-content-end'>
            <Navbar.Text>
              Signed in as: {userName}
            </Navbar.Text>

            <LogOut />
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Greeting />
      <Counter />
      <ChatList />
      <ChatForm />
    </>
  );
};

export default ChatPage;
