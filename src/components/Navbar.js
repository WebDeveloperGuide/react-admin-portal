import {Navbar,Container,Nav} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {logOut} from  '../redux/actions';
import {useHistory} from 'react-router';

const NavbarComponent = () => {
	const dispatch = useDispatch();	
	const history = useHistory(); 

	const loggedOut = () => {
		dispatch(logOut());
		history.push('/');
	}

	return(
		<>
		<Navbar>
		  <Container>
		    <Navbar.Brand href="#home"></Navbar.Brand>
		    <Nav className="me-auto">
		      <Link to="/login" className="nav-link">Login</Link>
		      <Link to="/login" onClick={loggedOut} className="nav-link">Log Out</Link>
		      <Link to="/register" className="nav-link">Register</Link>
		    </Nav>
		  </Container>
		</Navbar>
		</>		
		)

}

export default NavbarComponent;