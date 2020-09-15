import React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import About from './components/about/about';

import Footer from './shared/footer'
import Header from './shared/header';
import Article from './shared/article';
import Image from './shared/images';
import { posts } from '../helpers/data';
import '../assets/styles/post.css'
import '../assets/styles/projects.css'

const projects = [
	{
		title: "Magna",
		content: "Cipdum dolor",
		img: require("../assets/images/pic02.jpg")
	},{
		title: "Ipsum",
		content: "Vestibulum comm",
		img: require("../assets/images/pic01.jpg")
	}
]

const App = () => {
	const [post, setPost] = useState()
	const columns = {lg:6,md:6,sm:6}
	useEffect(() =>{
		setPost(posts())
	}, [])
	return(
		<div>
			<Header />
			<Container className="container-post">
				<Row>
					{post ? (
						post.map((item, i) => 
						{
							let contentclass = (i+1)%2===0 ? "border-text" : "";
							return (<Col md={4} lg={4} key={i} className={`${contentclass} title-post`}>
								<Article
									title={item.title}
									content={item.content}
								/>
							</Col>)
						})
					):
					"Loading..."}
				</Row>
			</Container>
			<div className="banner2">
				
			</div>
			<About/>
			<Container className="container-project title-post container-division">
				<Row className="text-center">
					<Col lg={{ span: 4, offset: 4 }}>
						<h2>Ipsum Feugiat</h2>
						<p>Semper suscipit posuere apede</p>
					</Col>
				</Row>
				<Row className="text-center">
					{projects.map((project,i) => (
						<Col {...columns} key={i}>
							<Image
								img={project.img}
								classname="project-img"
								alt={project.alt}
							/>
							<Article 
								title={project.title}
								content={project.content}
							/>
						</Col>
					))}
				</Row>
			</Container>
			<Footer/>
			
		</div>
	);
}

export default App;