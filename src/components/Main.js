import './Main.css';
import { Movie } from './Movie';

export function Main(props) {
	return (
		<div className="Main">
			{props.moviesToDisplay.map((movieObj) => {
				return (
					<Movie
						key={movieObj.id}
						movieDetails={movieObj}
						deleteMovie={props.deleteMovie}
					/>
				);
			})}
		</div>
	);
}
