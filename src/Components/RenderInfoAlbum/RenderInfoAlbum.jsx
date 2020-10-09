import React from 'react';
import { useSelector } from 'react-redux';

//Componente Render Info Album
const RenderInfoAlbum = () => {
	//Usamos useSelector para poder suscribirnos al store de redux
	const state = useSelector((state) => state.infoAlbum);
	//Render
	return (
		<>
			{/* Mapeamos los datos del store y generamos una condicional con el operador ternario*/}
			{!!Object.keys(state).length ? (
				<div>
					<img src={state.album.image[3]['#text']} alt="Logo" />
					<p>{state.album.artist}</p>
					<p>{state.album.name}</p>
					<div>
						{state.album.tracks.track.map((c, i) => {
							return (
								<ul key={i}>
									<li>{c.name}</li>
									<li>{c.duration}</li>
									<li>{c.url}</li>
								</ul>
							);
						})}
					</div>
				</div>
			) : (
				<div>
					<h5>Cargando...</h5>
				</div>
			)}
			<div></div>
		</>
	);
};

export default RenderInfoAlbum;
