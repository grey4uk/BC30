import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { sendMessage } from 'redux/chat/chatOperations';

const ChatForm = () => {
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    //     console.log(
    //       'e.currentTarget.elements',
    //       e.currentTarget.elements
    //     );
    const message = e.currentTarget.elements.message.value;
    dispatch(sendMessage(message));
    e.target.reset();
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '0',
        left: '0',
        right: '0',
      }}>
      <Form onSubmit={onSubmit}>
        <Form.Group
          className='mb-3'
          style={{ display: 'flex' }}>
          <Form.Control
            //     id='message'
            name='message'
            type='text'
            placeholder='Enter message'
          />
          <Button type='submit'>Send</Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default ChatForm;
