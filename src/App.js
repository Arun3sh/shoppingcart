import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
// import { FaShoppingCart } from 'react-icons/fa';
// import { AiOutlineShoppingCart } from 'react-icons/ai';
// import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { MyNavbar } from './shopping/Navbar';
import { Footer } from './shopping/Footer';
import { Header } from './shopping/Header';
import { Shoppingcard } from './shopping/ShoppingCard';

function App() {
	return (
		<div className="App">
			<MyNavbar />
			<Header />
			<Shoppingcard />
			{/* <section>my card</section> */}
			<Footer />
		</div>
	);
}

export default App;
