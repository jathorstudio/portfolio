import React from 'react'

const Image = ({img,classname, alt}) => {
	return (
		<div className={classname}>
			<img src={img} alt={alt} />
		</div>
	);
}

export default Image