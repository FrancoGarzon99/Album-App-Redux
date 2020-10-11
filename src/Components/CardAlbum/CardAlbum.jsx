import React from 'react';
import { Col, Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './CardAlbum.css';
//Componente Card Album
const CardAlbum = ({ img, titulo }) => {
	//Render
	return (
		<Col className="item">
			<NavLink to={`/InfoAlbum/${titulo}`}>
				<Image src={img} alt="Portada(Logo)" className="pic" />
			</NavLink>
			<div>
				<p className="titulo">{titulo}</p>
			</div>
		</Col>
	);
};

export default CardAlbum;
