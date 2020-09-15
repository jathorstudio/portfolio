import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
	return (
		<footer className="container-division">
				<div>
					<div>
						<ul className="icons">
							<li><a href="#"><FontAwesomeIcon icon={['fab','facebook-f']} /></a></li>
							<li><a href="#"><FontAwesomeIcon icon={['fab','twitter']} /></a></li>
							<li><a href="#"><FontAwesomeIcon icon={['fab','linkedin-in']} /></a></li>
							<li><a href="#"><FontAwesomeIcon icon={['fab','instagram']} /></a></li>
						</ul>
					</div>
				</div>
			</footer>
	);
}

export default Footer;