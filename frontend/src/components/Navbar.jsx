import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

export const Navabr = ()=>{
  return (
    <Navbar expand="lg" className="bg-body-tertiary text-light bg-success">
      <Container>
        <Navbar.Brand href="/">جا‌‌ذبه گردشگری همدان</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
              <NavLink className="nav-link" to="/">خانه</NavLink>
              <NavLink className="nav-link" to="/map">نقشه</NavLink>
              <NavLink className="nav-link" to="/auth/register">ثبت نام</NavLink>
              <NavLink className="nav-link" to="/auth/login">ورود</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
