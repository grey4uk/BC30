import { ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import {
  allMessagesSelector,
  userNameSelector,
} from 'redux/selectors';

const ChatList = () => {
  const messages = useSelector(allMessagesSelector);
  const name = useSelector(userNameSelector);
  return (
    <ListGroup>
      {messages.map(({ username, message, id }) => {
        const isItMy = name === username;
        return (
          <div
            key={id}
            style={
              isItMy
                ? { width: '100vw' }
                : {
                    display: 'flex',
                    width: '100vw',
                    justifyContent: 'flex-end',
                  }
            }>
            <ListGroup.Item
              variant={isItMy ? 'warning' : 'info'}
              style={{ width: '50%' }}>
              {username} : {message}
            </ListGroup.Item>
          </div>
        );
      })}
    </ListGroup>
  );
};

export default ChatList;
