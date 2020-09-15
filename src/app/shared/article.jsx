import React from 'react';

const Article = ({title, content}) => {
	return (
		<article>
			<header>
				<h3>{title}</h3>
			</header>
			<p>{content}</p>
		</article>
	);
}

export default Article;