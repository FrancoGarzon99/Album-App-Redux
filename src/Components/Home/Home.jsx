import React from 'react';
import { Container, Image, Row } from 'react-bootstrap';
import Buscador from '../Buscador/Buscador';
import Logo from './album.svg';

//Style de lcomponente
const styleHome = {
	homeComponent: {
		width: '100%',
		height: '70vh',
	},
	LogoWidth: {
		width: '200px',
	},
};
//Componente Home
const Home = (props) => {
	//Render
	return (
		<>
			<Container>
				<Row
					className="d-flex justify-content-md-center align-items-md-center flex-column"
					style={styleHome.homeComponent}
				>
					<Image src={Logo} style={styleHome.LogoWidth} className="mb-4" />
					<h5 className="mb-3">ALBUMS APP</h5>
					<Buscador history={props.history} />
				</Row>
			</Container>
		</>
	);
};

export default Home;
