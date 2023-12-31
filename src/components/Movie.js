export function Movie(props) {
	return (
		<div className="Movie">
			<div className="card">
				{props.movieDetails.imgURL ? (
					<img
						src={props.movieDetails.imgURL}
						alt={`${props.movieDetails.title} cover`}
					/>
				) : (
					<img
						src="https://dummyimage.com/180x230/000/ffffff.png&text=No+image+in+database"
						alt={`${props.movieDetails.title} cover`}
					/>
				)}

				<div>
					<h2>{props.movieDetails.title}</h2>
				</div>

				<div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
					<div>
						<h4>Rating:</h4> {props.movieDetails.rating} /10 ⭐
					</div>

					<div className="genres">
						<h4>Genres:</h4>
						{props.movieDetails.genres.map((genre, index) => {
							return <div key={index}>{genre}</div>;
						})}
					</div>
				</div>

				<button
					style={{ marginTop: '2rem' }}
					onClick={() => props.deleteMovie(props.movieDetails.title)}
				>
					Delete
				</button>
			</div>
		</div>
	);
}
