import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Article from '../../shared/article'
import Image from '../../shared/images'
import '../../../assets/styles/about.css'
import Footer from '../../shared/footer'

const persons = [
	{
		title: "Danielis Gazcón",
		content: "Graphic Designer",
		img: require("../../../assets/images/pic03.jpg")
	},{
		title: "Daniel Gazcón",
		content: "Full Stack Developer",
		img: require("../../../assets/images/yo_perfil.png")
	}
]



const About = () => {
	const columns = {
		lg:3,
		md:6,
		sm:12,
	}
	return(
		<Container className="container-us" fluid>
			<Row className="text-center">
				<Col lg={{ span: 4, offset: 4 }}>
					<h2>Nosotros</h2>
				</Col>
			</Row>
			<Row className="text-center row-box-profile">
				{persons.map((person,i) => (
					<Col {...columns} key={i} className="box-profile">
						<Image
						img={person.img}
						classname=""
							alt={person.alt}
						/>
						<div className="box-content"></div>
						<div className="box-text">
							<Footer
								ig="https://www.instagram.com/dgazcon/"
								twitter="https://www.twitter.com/dgazcon/"
								linkedin="https://www.linkedin.com/in/dgazcon/"
								classname="icons us-icons"
							/>
						</div>
						<Article 
							title={person.title}
							content={person.content}
						/>
					</Col>
						
				))}

			</Row>
		</Container>
	);
}

export default About;