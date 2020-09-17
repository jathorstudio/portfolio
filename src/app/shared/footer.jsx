import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
	return (
		<footer className="container-division">
			<div>
				<ul className="icons">
					<li><a target="_blank" href="https://www.linkedin.com/in/dgazcon/"><FontAwesomeIcon icon={['fab','linkedin-in']} /></a></li>
					<li><a target="_blank" href="https://twitter.com/dgazcon"><FontAwesomeIcon icon={['fab','twitter']} /></a></li>
					<li><a target="_blank" href="https://www.instagram.com/jathorstudio"><FontAwesomeIcon icon={['fab','instagram']} /></a></li>
				</ul>
			</div>
		</footer>
	);
}

export default Footer;