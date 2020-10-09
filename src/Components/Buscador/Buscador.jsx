import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { albumsApiData, ArtistaBuscado } from '../../Redux/Actions/Actions';
import { Form, FormControl, Button } from 'react-bootstrap';

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
			<Form inline onSubmit={dataEnviada}>
				<FormControl
					type="text"
					placeholder="Buscar Artista"
					className="mr-sm-2"
					value={inputValue}
					onChange={stateInput}
				/>
				<Button variant="info" type="submit">
					Buscar
				</Button>
			</Form>
		</>
	);
};

export default Buscador;
