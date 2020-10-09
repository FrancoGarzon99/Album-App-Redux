import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { infoAlbumData } from '../../Redux/Actions/Actions';

//Componente Render Albums
const RenderAlbums = (props) => {
	//Nos suscribimos a los datos guardados en el store
	const state = useSelector((state) => state);
	const dispatch = useDispatch();
	//Render
	return (
		<>
			{/* Mapeamos los datos del store y generamos una condicional con el operador ternario*/}
			{!!Object.keys(state.albumsEncontrados).length ? (
				state.albumsEncontrados.map((album, i) => {
					return (
						<div key={i}>
							<span
								onClick={() =>
									dispatch(infoAlbumData(state.inputValue, album.name))
								}
							>
								{/* Linkiamos y pasamos los datos a la url */}
								<NavLink to={`/InfoAlbum/${album.name}`}>
									<img src={album.image[2]['#text']} alt="Logo" />
								</NavLink>
							</span>
							<p>{album.name}</p>
						</div>
					);
				})
			) : (
				<h5>Cargando...</h5>
			)}
		</>
	);
};

export default RenderAlbums;
