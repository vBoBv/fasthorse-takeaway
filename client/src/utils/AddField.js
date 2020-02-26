import React from 'react';

const AddField = (props) => {
	return (
		<div className='menu-form__add-button'>
			<button
				className='ui violet button'
				type='button'
				title={props.title}
				onClick={props.onClick}>
				<i className='plus square outline icon'></i>Add {props.label}
			</button>
		</div>
	);
};

export default AddField;
