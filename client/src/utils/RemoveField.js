import React from 'react';

const RemoveField = (props) => {
	return (
		<div>
			<button
				disabled={props.onDisable}
				className='ui red button'
				type='button'
				title={props.title}
				onClick={props.onClick}>
				<i className='trash alternate outline icon'></i>Remove
			</button>
		</div>
	);
};

export default RemoveField;
