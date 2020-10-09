//Inicializamos el estado de nuestro store el importamos las acciones que queremos realizar en nuestras App
const initialState = {
	albumsEncontrados: [],
	infoAlbum: {},
	inputValue: '',
};

//Creamos nuestros casos de  reducers

const Reducers = (state = initialState, action) => {
	switch (action.type) {
		case 'ALBUMS_ENCONTRADOS':
			return {
				...state,
				albumsEncontrados: action.payload,
			};
		case 'INFO_ALBUM':
			return {
				...state,
				infoAlbum: action.payload,
			};
		// case 'MIS_ALBUMS_FAVORITOS':
		// 	return {
		// 		...state,
		// 		albumsFavoritos: state.albumsFavoritos.concat(action.payload),
		// 	};
		case 'INPUT_VALUE':
			return {
				...state,
				inputValue: action.payload,
			};

		default:
			return state;
	}
};
export default Reducers;
