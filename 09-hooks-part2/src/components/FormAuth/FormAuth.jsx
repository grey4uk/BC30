import {
  useEffect,
  // useState,
  useReducer,
} from 'react';

const initialState = { email: '', name: '', password: '' };

const ACTION_TYPES = {
  email: 'email',
  name: 'name',
  reset: 'reset',
  password: 'password',
};

const userReducer = (state, action) => {
  // const action={type:'',payload:''};
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPES.email:
      return { ...state, email: payload };
    case ACTION_TYPES.name:
      return { ...state, name: payload };
    case ACTION_TYPES.password:
      const concat = state.name + state.email;
      return {
        ...state,
        password: concat,
      };

    case ACTION_TYPES.reset:
      return initialState;

    default:
      return state;
  }
};

const FormAuth = () => {
  const [user, dispatch] = useReducer(
    userReducer,
    initialState
  );

  //   const [user, setUser] = useState(initialState);
  const { email, name } = user;

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    //     setUser({ ...user, [name]: value });
    dispatch({ type: name, payload: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    Promise.resolve()
      .then(() => dispatch({ type: ACTION_TYPES.password }))
      .then(() => console.log('user', user))
      .then(() => dispatch({ type: ACTION_TYPES.reset }));

    //     setUser(initialState);
  };

  useEffect(() => {
    console.log('user', user);
  }, [user]);

  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder='name'
        name={ACTION_TYPES.name}
        value={name}
        onChange={onChangeInput}
      />
      <input
        placeholder={ACTION_TYPES.email}
        name='email'
        value={email}
        onChange={onChangeInput}
      />
      <input type='submit' placeholder='Submit' />
    </form>
  );
};

export default FormAuth;
