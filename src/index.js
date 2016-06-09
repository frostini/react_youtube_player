import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
var CONTAINER = document.querySelector('.container');
const API_KEY = 'AIzaSyACruflsQ1asyTDX_BdX5S8thDIu5rgFhs';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {videos: [] };

		YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
			this.setState({ videos });
		});
	}

	render () {
		return (
			<div>
				<SearchBar />
				<VideoList videos={this.state.videos} />
			</div>
		);
	}
}

ReactDOM.render(<App/>, CONTAINER);

