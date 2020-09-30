import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = ({twitter, fb, ig, linkedin, classname}) => {
	console.log(twitter, fb, ig, linkedin)
	return (
		<footer className="container-division">
			<div>
				<ul className={classname}>
					{linkedin ? (
						<li><a rel="noopener noreferrer" target="_blank" href={linkedin}>
							<FontAwesomeIcon icon={['fab','linkedin-in']} /></a>
						</li>
					): ""}
					{twitter ? (
						<li><a rel="noopener noreferrer" target="_blank" href={twitter}>
							<FontAwesomeIcon icon={['fab','twitter']} /></a>
						</li>
					): ""}
					{fb ? (
						<li><a rel="noopener noreferrer" target="_blank" href={fb}>
							<FontAwesomeIcon icon={['fab','facebook']} /></a>
						</li>
					): ""}
					{ig ? (
						<li><a rel="noopener noreferrer" target="_blank" href={ig}>
							<FontAwesomeIcon icon={['fab','instagram']} /></a>
						</li>
					): ""}
				</ul>
			</div>
		</footer>
	);
}

export default Footer;