import './Main.css';
import { Movie } from './Movie';

export function Main(props) {
	return (
		<div className="Main">
			{props.moviesToDisplay.map((movieObj, index) => {
				return (
					<Movie
						key={index}
						movieDetails={movieObj}
						deleteMovie={props.deleteMovie}
					/>
				);
			})}
		</div>
	);
}
