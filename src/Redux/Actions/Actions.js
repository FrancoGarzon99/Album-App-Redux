//Actions Creators
const albumsEncontrados = (payload) => {
	return { type: 'ALBUMS_ENCONTRADOS', payload };
};
const infoAlbum = (payload) => {
	return { type: 'INFO_ALBUM', payload };
};

export const albumsFavoritos = (payload) => {
	return { type: 'MIS_ALBUMS_FAVORITOS', payload };
};
export const ArtistaBuscado = (payload) => {
	return { type: 'INPUT_VALUE', payload };
};

//Actions Creators Asincronicas
export const albumsApiData = (inputValue) => {
	return async (dispatch) => {
		const urlData = await fetch(
			`http://ws.audioscrobbler.com/2.0/?method=album.search&album=${inputValue}&api_key=25d7a95b848926418d0dd718c5c7aaac&format=json`
		);
		const dataJson = await urlData.json();
		dispatch(albumsEncontrados(dataJson.results.albummatches.album));
	};
};
export const infoAlbumData = (inputValue, AlbumTitulo) => {
	return async (dispatch) => {
		const urlData = await fetch(
			`http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=25d7a95b848926418d0dd718c5c7aaac&artist=${inputValue}&album=${AlbumTitulo}&format=json`
		);
		const dataJson = await urlData.json();
		dispatch(infoAlbum(dataJson));
	};
};
