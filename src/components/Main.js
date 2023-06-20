import './Main.css';
import moviesArray from '../data/movies.json';
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

	/* 	let message = '';
	if (moviesToDisplay.length > 0) {
		message = <>Displaying {moviesToDisplay.length} movies</>;
	} else {
		message = <>No movies to display</>;
	} */

	return (
		<div className="Main">
			{/* <h1>{message}</h1> */}

			<h1>
				{moviesToDisplay.length > 0
					? `Displaying ${moviesToDisplay.length} movies`
					: 'No movies to display'}
			</h1>

			{moviesToDisplay.map((element) => {
				return (
					<div key={element.id} className="card">
						{element.imgURL ? (
							<img src={element.imgURL} alt={`${element.title} cover`} />
						) : (
							<img
								src="https://dummyimage.com/180x230/000/ffffff.png&text=No+image+in+database"
								alt={`${element.title} cover`}
							/>
						)}

						{/* <img src={element.imgURL} alt={`${element.title} cover`} /> */}

						<div>
							{element.id} - {element.title}
						</div>
						<div>Rating: {element.rating} ⭐</div>

						<div className="genres">
							Genres:
							{element.genres.map((genre) => {
								return <div>{genre}</div>;
							})}
						</div>

						<button onClick={() => deleteMovie(element.id)}>Delete</button>
					</div>
				);
			})}
		</div>
	);
}
