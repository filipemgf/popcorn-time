import './App.css';
import moviesArray from './data/movies.json';

import { useState } from 'react';

import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import { AddMovie } from './components/AddMovie';

function App() {
	const [moviesToDisplay, setMoviesDisplay] = useState(moviesArray);

	const deleteMovie = (movieTitle) => {
		setMoviesDisplay((moviesToDisplay) => {
			return moviesToDisplay.filter((element) => {
				return element.title !== movieTitle;
			});
		});
	};

	return (
		<div className="App">
			<Header moviesToDisplay={moviesToDisplay} />

			<AddMovie
				setMoviesDisplay={setMoviesDisplay}
				moviesToDisplay={moviesToDisplay}
			/>
			<Main moviesToDisplay={moviesToDisplay} deleteMovie={deleteMovie} />
			<Footer />
		</div>
	);
}

export default App;
