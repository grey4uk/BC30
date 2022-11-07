import { NavLink } from 'react-router-dom';

const getStyle = ({ isActive }) =>
  isActive ? { color: 'red' } : { color: 'black' };

const Navigator = () => {
  return (
    <nav style={{ display: 'flex', gap: '20px' }}>
      <NavLink to='/auth' style={getStyle}>
        Auth
      </NavLink>
      <NavLink to='/home' style={getStyle}>
        Home
      </NavLink>
      <NavLink to='/gallery' style={getStyle}>
        Gallery
      </NavLink>
    </nav>
  );
};

export default Navigator;
