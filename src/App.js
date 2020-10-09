import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home';
import PageResult from './Components/PageResult/PageResult';
import RenderInfoAlbum from './Components/RenderInfoAlbum/RenderInfoAlbum';
//Componente App
function App() {
	//Render
	return (
		<>
			<Switch>
				<Route path="/InfoAlbum/:titulo" component={RenderInfoAlbum} />
				<Route path="/Albums" component={PageResult} />
				<Route path="/" component={Home} />
			</Switch>
		</>
	);
}

export default App;
