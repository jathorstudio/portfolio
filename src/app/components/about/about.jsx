import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Article from '../../shared/article'
import Image from '../../shared/images'
import '../../../assets/styles/about.css'

const persons = [
	{
		title: "Magna",
		content: "Cipdum dolor",
		img: require("../../../assets/images/pic03.jpg")
	},{
		title: "Ipsum",
		content: "Vestibulum comm",
		img: require("../../../assets/images/pic04.jpg")
	},{
		title: "Tempus",
		content: "Fusce pellentes",
		img: require("../../../assets/images/pic05.jpg")
	},{
		title: "Dolore",
		content: "Praesent placer",
		img: require("../../../assets/images/pic06.jpg")
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
					<h2>Ipsum Feugiat</h2>
					<p>Semper suscipit posuere apede</p>
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