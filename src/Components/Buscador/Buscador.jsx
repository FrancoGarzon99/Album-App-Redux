import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { albumsApiData, ArtistaBuscado } from '../../Redux/Actions/Actions';

//Componente Buscador
const Buscador = ({ history }) => {
	//Usamos useDispatch para dispachar las acciones de nuestras actions creators
	const dispatch = useDispatch();
	//Estado del componente
	const [inputValue, setInputValue] = useState('');

	//OnSubmit
	const dataEnviada = (e) => {
		e.preventDefault();
		//Dispachamos las acciones que nos guardaran los datos en el store de redux
		dispatch(albumsApiData(inputValue));
		dispatch(ArtistaBuscado(inputValue));
		//Actualizamos el valor de nuestra url y nos redirije a otro componente
		history.push(`/Albums?${inputValue}`);
		setInputValue('');
	};
	//onChange
	const stateInput = (e) => {
		setInputValue(e.target.value);
	};

	//Render
	return (
		<>
			<form onSubmit={dataEnviada}>
				<input
					type="text"
					placeholder="Artista"
					onChange={stateInput}
					value={inputValue}
				/>
				<button type="submit">Buscar</button>
			</form>
		</>
	);
};

export default Buscador;
