import { Component } from 'react';

export const priorityTypes = {
  none: 'ALL',
  low: 'LOW',
  medium: 'MEDIUM',
  high: 'HIGH',
};

const init = {
  title: '',
  desc: '',
  priority: priorityTypes.low,
};

class TodosForm extends Component {
  state = init;

  handleChangeInput = (e) => {
    // handleChangeInput = ({ target: { name, value } }) => {
    const {
      target: { name, value },
    } = e;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // const newTodo = [...e.target.elements].reduce(
    //   (acc, el) => {
    //     if (el.name) {
    //       return (acc = { ...acc, [el.name]: el.value });
    //     }
    //     return acc;
    //   },
    //   {}
    // );

    // const reset = () => {
    //   console.log('e.target', e.target);
    //   e.target.reset();
    // };

    // this.props.addTodo({
    //   todo: newTodo,
    //   reset,
    // });
    this.props.addTodo({
      todo: this.state,
      reset: this.reset,
    });
  };

  reset = () => {
    this.setState(init);
  };

  render() {
    const { title, desc, priority } = this.state;
    const { handleChangeInput, handleSubmit } = this;
    // const { handleSubmit } = this;
    return (
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}>
        <label>
          Title
          <input
            placeholder='title'
            value={title}
            onChange={handleChangeInput}
            name='title'
            id='title'
            type='text'
          />
        </label>
        <label>
          Description
          <input
            placeholder='description'
            value={desc}
            onChange={handleChangeInput}
            name='desc'
            id='desc'
            type='text'
          />
        </label>
        <label
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
          }}>
          Priority
          <div>
            <label>
              {priorityTypes.low}
              <input
                value={priorityTypes.low}
                onChange={handleChangeInput}
                name='priority'
                type='radio'
                checked={priority === priorityTypes.low}
              />
            </label>
            <label>
              {priorityTypes.medium}
              <input
                value={priorityTypes.medium}
                onChange={handleChangeInput}
                name='priority'
                type='radio'
                checked={priority === priorityTypes.medium}
              />
            </label>
            <label>
              {priorityTypes.high}
              <input
                value={priorityTypes.high}
                onChange={handleChangeInput}
                name='priority'
                type='radio'
                checked={priority === priorityTypes.high}
              />
            </label>
          </div>
        </label>
        <input type='submit' value='ADD' />
      </form>
    );
  }
}

export default TodosForm;
