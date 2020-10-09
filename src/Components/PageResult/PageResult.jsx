import React from 'react';
import Header from '../Header/Header';
import RenderAlbums from '../RenderAlbums/RenderAlbums';

//Componente Page Result
const PageResult = (props) => {
	//Render
	return (
		<>
			<Header history={props.history} />
			<RenderAlbums />
		</>
	);
};

export default PageResult;
