// import { FaShoppingCart } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

export function MyNavbar() {
	return (
		<Navbar bg="light" expand="lg" className="myNav">
			<Container>
				<Navbar.Brand href="#home">MyShopping</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#link">Link</Nav.Link>
						<NavDropdown title="Category" id="basic-nav-dropdown">
							<NavDropdown.Item href="#category/electronics">Electronics</NavDropdown.Item>
							<NavDropdown.Item href="#category/clothes">Clothes</NavDropdown.Item>
							<NavDropdown.Item href="#category/toys">Toys</NavDropdown.Item>
							{/* <NavDropdown.Divider /> */}
							<NavDropdown.Item href="#category/hs">Household Stationary</NavDropdown.Item>
						</NavDropdown>
					</Nav>
					<button className="btn btn-primary">
						<AiOutlineShoppingCart />
						{/* <FaShoppingCart /> */} Cart 0
					</button>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
