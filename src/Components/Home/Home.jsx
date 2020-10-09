import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Buscador from '../Buscador/Buscador';

//Style de lcomponente
const styleHome = {
	homeComponent: {
		width: '100%',
		height: '100vh',
	},
};
//Componente Home
const Home = (props) => {
	//Render
	return (
		<>
			<Container>
				<Row
					className="justify-content-md-center align-items-md-center"
					style={styleHome.homeComponent}
				>
					<Buscador history={props.history} />
				</Row>
			</Container>
		</>
	);
};

export default Home;
