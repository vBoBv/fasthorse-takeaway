import React from 'react';

const MenuField = ({ input, label, meta: { error, touched } }) => {
	return (
		<div className='field'>
			<label>{label}</label>
			<input {...input} placeholder={label} />

			<div className='menu-form__error-field'>{touched && error}</div>
		</div>
	);
};

export default MenuField;
