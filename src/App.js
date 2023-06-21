import './App.css';
import moviesArray from './data/movies.json';

import { useState } from 'react';

import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';

function App() {
	const [moviesToDisplay, setMoviesDisplay] = useState(moviesArray);

	const deleteMovie = (movieId) => {
		setMoviesDisplay((moviesToDisplay) => {
			return moviesToDisplay.filter((element) => {
				return element.id !== movieId;
			});
		});
	};

	return (
		<div className="App">
			<Header moviesToDisplay={moviesToDisplay} />
			<Main moviesToDisplay={moviesToDisplay} deleteMovie={deleteMovie} />
			<Footer />
		</div>
	);
}

export default App;
