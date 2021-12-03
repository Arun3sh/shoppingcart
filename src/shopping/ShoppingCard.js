import Button from '@restart/ui/esm/Button';
import { Card } from 'react-bootstrap';

export function Shoppingcard() {
	const productName = [
		{
			name: 'Product 1',
			img: 'https://images-eu.ssl-images-amazon.com/images/I/31kpAzgIFsL._AC_SX184_.jpg',
		},
		{
			name: 'Product 2',
			img: 'https://images-eu.ssl-images-amazon.com/images/I/41xJfxNVotL._AC_SX184_.jpg',
		},
		{
			name: 'Product 3',
			img: 'https://images-eu.ssl-images-amazon.com/images/I/51DzWEDHU6L._AC_SX184_.jpg',
		},
		{
			name: 'Product 4',
			img: 'https://images-eu.ssl-images-amazon.com/images/I/51DzWEDHU6L._AC_SX184_.jpg',
		},
		{
			name: 'Product 5',
			img: 'https://images-eu.ssl-images-amazon.com/images/I/51DzWEDHU6L._AC_SX184_.jpg',
		},
	];
	return (
		<section className="shopping-section">
			{/* Traversing through the array to get the product data */}
			{productName.map((product, index) => {
				return (
					<Card className="shopping-card" key={index}>
						<Card.Img className="shopping-image" variant="top" src={product.img} />
						<Card.Body className="shopping-body">
							<Card.Title className="title">{product.name}</Card.Title>
							<Card.Text className="text">
								<span className="description">
									Product description comes here to explain about the product.
								</span>
								<span className="price">$15.00 - $25.00</span>
							</Card.Text>
							<Button className="btn btn-primary to-cart">Add to Cart</Button>
						</Card.Body>
					</Card>
				);
			})}
		</section>
	);
}
