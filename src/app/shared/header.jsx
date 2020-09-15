import React, {useEffect, useState} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../../assets/styles/header.css'

const Header = () => {
	const [isScroll, setIsScroll] = useState(true)
	const [width, setWidth] = useState(0)

	useEffect(() => {
		if (width > 767) {
			console.log('xxx')
			window.onscroll = (e) => {
				if (window.pageYOffset > 0) {
					setIsScroll(true)
				} else {
					setIsScroll(false)
				}
			}
		}
		const updateWidth = () => {
			const width = document.body.clientWidth
			console.log(width)
			setWidth(width)
		}

		updateWidth()

		window.addEventListener('resize', updateWidth)


	}, [width])

	return (
		<div>
			<Navbar expand="md" fixed="top" className={`navbar-items ${isScroll ? "navbartop": ""}`} >
			  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
			  <Navbar.Toggle aria-controls="basic-navbar-nav" />
			  <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
			    <Nav >
		      		<Nav.Link href="#home">Home</Nav.Link>
		      		<Nav.Link href="#link">Link</Nav.Link>
			    </Nav>
			  </Navbar.Collapse>
			</Navbar>
			<section className="banner">
				<h1>Welcome to Theory</h1>
				<p>A free responsive HTML5 website template by TEMPLATED.</p>
			</section>

		</div>
	);
}

export default Header;