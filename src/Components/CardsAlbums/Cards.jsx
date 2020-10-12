import React from 'react';
import { Col, Image, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Cards.css';

//Componente Card Album
export const CardAlbum = ({ img, titulo }) => {
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
//Componente Card Info Albums
export const CardInfoAlbums = ({ img, nameArtist, nameAlbum }) => {
	return (
		<Col>
			<div className="header-card-info mb-4 mr-4">
				<Image src={img} alt="Portada" className="portada-card" />
			</div>
			<div className="body-card-info">
				<h3 className="mb-3">{nameArtist}</h3>
				<h5>{nameAlbum}</h5>
			</div>
		</Col>
	);
};
//componente Lista de Tracks
export const Ulist = ({ nameTrack, duration, url }) => {
	return (
		<>
			<div className=" d-flex body-ul-list p-2 justify-content-between">
				<div className="name-container">
					<h5>{nameTrack}</h5>
				</div>
				<div>
					<h5>Time: {duration}</h5>
				</div>
				<div>
					<a href={url} target="_blank" rel="noopener noreferrer">
						<Button variant="outline-info">Play</Button>
					</a>
				</div>
			</div>
		</>
	);
};
