import React from 'react';
import Buscador from '../Buscador/Buscador';

//Componente Home
const Home = (props) => {
	//Render
	return (
		<>
			<Buscador history={props.history} />
		</>
	);
};

export default Home;
