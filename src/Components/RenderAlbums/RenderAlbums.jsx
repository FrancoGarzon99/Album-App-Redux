import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { infoAlbumData } from '../../Redux/Actions/Actions';
import { CardAlbum } from '../CardsAlbums/Cards';

//Componente Render Albums
const RenderAlbums = (props) => {
	//Nos suscribimos a los datos guardados en el store
	const state = useSelector((state) => state);
	const dispatch = useDispatch();
	//Render
	return (
		<>
			<Container fluid>
				<Row className="justify-content-center">
					{/* Mapeamos los datos del store y generamos una condicional con el operador ternario*/}
					{!!Object.keys(state.albumsEncontrados).length ? (
						state.albumsEncontrados.map((album, i) => {
							if (album.name === null || album.image[3]['#text'] === '') {
								let errorAlbum = console.log('<= Albums no encontrados');
								return errorAlbum;
							} else {
								//GENERAMOS UNA CONDICION PARA QUE LAS IMAGENES T TITULOS QUE NO SE ENCUENTRAN NO LAS MUESTRE, SOLAMENTE MUESTRE LAS QUE SI ESTAN DISPONIBLES
								return (
									<div key={i}>
										<span
											onClick={() =>
												dispatch(infoAlbumData(state.inputValue, album.name))
											}
										>
											<CardAlbum
												img={album.image[3]['#text']}
												titulo={album.name}
												key={i}
											/>
										</span>
									</div>
								);
							}
						})
					) : (
						<h5>Cargando...</h5>
					)}
				</Row>
			</Container>
		</>
	);
};

export default RenderAlbums;
