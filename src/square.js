import React from 'react';

const Square = (props) => {
	return (
		<button key={props.value} className={`square ${props.winclass}`} onClick={props.onClick}>
	      {props.value}
	    </button>
	);
}

export default Square;