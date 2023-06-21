import './Header.css';

export function Header(props) {
	return (
		<header className="Header">
			<h1>Popcorn Time 🍿</h1>
			<h2>
				{props.moviesToDisplay.length > 0
					? `Displaying ${props.moviesToDisplay.length} movies`
					: 'No movies to display'}
			</h2>
		</header>
	);
}
