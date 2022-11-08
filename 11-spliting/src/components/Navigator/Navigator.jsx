import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const getStyle = ({ isActive }) =>
  isActive ? { color: 'red' } : { color: 'white' };

const Navigator = () => {
  return (
    // <nav style={{ display: 'flex', gap: '20px' }}>
    <Navbar bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand>
          <NavLink to='/' style={getStyle} end>
            Home
          </NavLink>
        </Navbar.Brand>
        <Nav
          className='me-auto'
          style={{ display: 'flex', gap: '20px' }}>
          <NavLink to='/auth' style={getStyle}>
            Auth
          </NavLink>

          <NavLink to='/gallery' style={getStyle}>
            Gallery
          </NavLink>

          <NavLink to='/router' style={getStyle}>
            Included Router
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
    // </nav>
  );
};

export default Navigator;
