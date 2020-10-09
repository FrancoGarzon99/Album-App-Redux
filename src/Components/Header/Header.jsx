import React from 'react';
import Buscador from '../Buscador/Buscador';
import { Navbar, Nav, Container } from 'react-bootstrap';

//Componente Header
const Header = (props) => {
	//Render
	return (
		<>
			<Navbar variant="light" className="shadow p-3 mb-5 bg-light rounded">
				<Container>
					<Navbar.Brand href="#home">LOGO</Navbar.Brand>
					<Nav className="mr-auto"></Nav>
					<Buscador history={props.history} />
				</Container>
			</Navbar>
		</>
	);
};

export default Header;
