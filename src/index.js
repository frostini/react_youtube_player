import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';


const API_KEY = 'AIzaSyACruflsQ1asyTDX_BdX5S8thDIu5rgFhs';

const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
}
var container = document.querySelector('.container');
ReactDOM.render(<App/>, container);

