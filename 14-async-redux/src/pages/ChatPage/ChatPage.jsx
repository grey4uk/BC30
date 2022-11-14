import LogOut from 'components/LogOut/LogOut';
import { Container, Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const ChatPage = () => {
  const userName = useSelector(
    (state) => state.auth.user.displayName
  );
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
    </>
  );
};

export default ChatPage;
