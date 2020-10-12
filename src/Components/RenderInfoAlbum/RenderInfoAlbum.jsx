import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import './RenderInfoAlbum.css';
import { useSelector } from 'react-redux';
import { CardInfoAlbums, Ulist } from '../CardsAlbums/Cards';
import Loading from '../Loading/Loading';

//Componente Render Info Album
const RenderInfoAlbum = () => {
	//Usamos useSelector para poder suscribirnos al store de redux
	const state = useSelector((state) => state.infoAlbum);
	//Render
	return (
		<>
			<Container>
				<Row className="render-info-albums-row">
					{/* Mapeamos los datos del store y generamos una condicional con el operador ternario*/}
					{!!Object.keys(state).length ? (
						<Col className="d-flex">
							<div className="img-info">
								<CardInfoAlbums
									img={state.album.image[3]['#text']}
									nameArtist={state.album.artist}
									nameAlbum={state.album.name}
								/>
							</div>
							<div className="render-info-album-tracks">
								{state.album.tracks.track &&
									state.album.tracks.track.map((c, i) => {
										return (
											<Ulist
												key={i}
												nameTrack={c.name}
												duration={c.duration}
												url={c.url}
											/>
										);
									})}
							</div>
						</Col>
					) : (
						<Col>
							<div className="d-flex justify-content-center">
								<Loading />
							</div>
						</Col>
					)}
				</Row>
			</Container>
		</>
	);
};

export default RenderInfoAlbum;
