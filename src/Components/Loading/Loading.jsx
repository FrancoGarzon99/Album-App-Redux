import React from 'react';
import { Image } from 'react-bootstrap';
import Gif from './Album-app.gif';
// Style del componente
const LoadStyle = {
	loadWidth: {
		width: '300px',
	},
};
//Componente Loading
const Loading = () => {
	//Render
	return (
		<div>
			<Image src={Gif} alt="Cargando..." style={LoadStyle.loadWidth} />
		</div>
	);
};

export default Loading;
