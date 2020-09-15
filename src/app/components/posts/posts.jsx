import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Article from '../../shared/article';

const Posts = ({title, content}) => {
	return (
		<Container>
			<Row>
				<Col md={4} lg={4}>
					<Article 
						title={title}
						content={content}
					/>
				</Col>	
			</Row>
		</Container>
	);
}

export default Posts;