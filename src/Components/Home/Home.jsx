import React from 'react';
import { Container, Image, Row } from 'react-bootstrap';
import Buscador from '../Buscador/Buscador';
import Logo from './Album-app.png';

//Style de lcomponente
const styleHome = {
	homeComponent: {
		width: '100%',
		height: '80vh',
	},
	LogoWidth: {
		width: '300px',
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
					<Buscador history={props.history} />
				</Row>
			</Container>
		</>
	);
};

export default Home;
