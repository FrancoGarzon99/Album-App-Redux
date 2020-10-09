import React from 'react';
import Buscador from '../Buscador/Buscador';

//Componente Header
const Header = (props) => {
	//Render
	return (
		<>
			<Buscador history={props.history} />
		</>
	);
};

export default Header;
