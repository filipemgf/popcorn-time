import { useState } from 'react';

export function AddMovie(props) {
	const [title, setTitle] = useState('');
	const [rating, setRating] = useState(0);
	const [imgURL, setImgURL] = useState(
		'https://dummyimage.com/180x230/ffffff/000000.jpg&text=No+image+available'
	);

	const handleSubmit = (event) => {
		event.preventDefault(); //avoid refresh on submit

		const newMovie = {
			id: '42',
			title: title,
			year: 2023,
			genres: ['Drama'],
			rating: rating,
			imgURL: imgURL,
		};

		props.setMoviesDisplay([newMovie, ...props.moviesToDisplay]);

		setTitle('');
		setImgURL('');
		setRating('');
	};

	return (
		<section>
			<form
				style={{
					display: 'flex',
					gap: '1rem',
					justifyContent: 'center',
					marginTop: '1rem',
				}}
				onSubmit={handleSubmit}
			>
				<label>
					Title:
					<input
						type="text"
						name="title"
						placeholder="Enter the title"
						value={title}
						onChange={(event) => {
							setTitle(event.target.value);
						}}
					/>
				</label>

				<label>
					Rating:
					<input
						type="number"
						name="rating"
						min="1"
						max="10"
						required
						value={rating}
						onChange={(event) => {
							setRating(event.target.value);
						}}
					/>
				</label>

				<label>
					Image URL:
					<input
						type="string"
						name="imgURL"
						min="1"
						max="10"
						onChange={(event) => {
							setImgURL(event.target.value);
						}}
					/>
				</label>

				<button>Create</button>
			</form>
		</section>
	);
}
