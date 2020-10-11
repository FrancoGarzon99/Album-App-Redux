import React from 'react';
import Buscador from '../Buscador/Buscador';
import Logo from '../Home/album.svg';
import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
//Style de componente
const styleHeader = {
	logoWidth: {
		width: '52px',
	},
};
//Componente Header
const Header = (props) => {
	//Render
	return (
		<>
			<Navbar variant="light" className="shadow p-2 mb-5 bg-light rounded">
				<Container>
					<Link to={'/'}>
						<Image src={Logo} style={styleHeader.logoWidth} />
					</Link>
					<Nav className="mr-auto"></Nav>
					<Buscador history={props.history} />
				</Container>
			</Navbar>
		</>
	);
};

export default Header;
