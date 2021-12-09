import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

export function StarRating() {
	const [rating, setRating] = useState(null);
	return (
		<div className="star-rating">
			{[...Array(5)].map((star, i) => {
				const ratingValue = i + 1;
				return (
					<label key={i}>
						<input
							type="radio"
							name="rating"
							value={ratingValue}
							onClick={() => setRating(ratingValue)}
						/>
						<FaStar className="star" color={ratingValue <= rating ? 'yellow' : 'black'} size={20} />
					</label>
				);
			})}
		</div>
	);
}
