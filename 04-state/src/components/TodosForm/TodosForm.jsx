import { Component } from 'react';
import { nanoid } from 'nanoid';

const init = { title: '', desc: '' };

class TodosForm extends Component {
  state = init;

  //   handleChangeInput = (e) => {
  //     console.log('e.target', e.target);
  //     this.setState({ [e.target.name]: e.target.value });
  //   };
  handleChangeInput = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo({ ...this.state, id: nanoid() });

    this.reset();
    //     e.target.reset();
  };

  reset = () => {
    this.setState(init);
  };

  render() {
    const { title, desc } = this.state;
    const { handleChangeInput, handleSubmit } = this;
    return (
      <form onSubmit={handleSubmit}>
        <input
          placeholder='title'
          value={title}
          onChange={handleChangeInput}
          name='title'
          type='text'
        />
        <input
          placeholder='description'
          value={desc}
          onChange={handleChangeInput}
          name='desc'
          type='text'
        />
        <input type='submit' value='ADD' />
      </form>
    );
  }
}

export default TodosForm;
