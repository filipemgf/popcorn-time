import './Main.css';
import moviesArray from '../data/movies.json';
import { Movie } from './Movie';
import { useState } from 'react';

export function Main() {
	const [moviesToDisplay, setMoviesDisplay] = useState(moviesArray);

	const deleteMovie = (movieId) => {
		setMoviesDisplay((moviesToDisplay) => {
			return moviesToDisplay.filter((element) => {
				return element.id !== movieId;
			});
		});
	};

	/* This builds the message variable */

	/* 	let message = '';
	if (moviesToDisplay.length > 0) {
		message = <>Displaying {moviesToDisplay.length} movies</>;
	} else {
		message = <>No movies to display</>;
	} */

	return (
		<div className="Main">
			{/* Another way of displaying the message */}
			{/* <h1>{message}</h1> */}

			<h1>
				{moviesToDisplay.length > 0
					? `Displaying ${moviesToDisplay.length} movies`
					: 'No movies to display'}
			</h1>

			{moviesToDisplay.map((movieObj) => {
				return (
					<Movie
						key={movieObj.id}
						movieDetails={movieObj}
						deleteMovie={deleteMovie}
					/>
				);
			})}
		</div>
	);
}
