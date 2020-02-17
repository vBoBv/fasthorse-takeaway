import React from 'react';
import { connect } from 'react-redux';
import { submitMenu } from '../../actions';

import ResuableMenu from '../ResuableMenu';

const MenuFormReview = ({ onCancel, formValues, submitMenu }) => {
	const renderActionButton = () => {
		return (
			<div className='menu-form-review__action-buttons  ui large buttons'>
				<button className='ui black button' onClick={onCancel}>
					<i className='angle left icon'></i>Back
				</button>
				<div className='or'></div>
				<button
					onClick={() => submitMenu(formValues)}
					className='ui teal button'>
					<i className='check icon'></i>Create Menu
				</button>
			</div>
		);
	};

	const renderMenuHeader = () => {
		return (
			<div className='menu-form-review__menu-details'>
				<div>
					<h3>{formValues.menuName}</h3>
				</div>
				<div>
					<p>{formValues.menuDescription}</p>
				</div>
			</div>
		);
	};

	return (
		<div className='menu-form-review'>
			<div className='menu-form-review__preview-menu'>
				{renderMenuHeader()}
				<ResuableMenu menuData={formValues.item} />
			</div>
			{renderActionButton()}
		</div>
	);
};

const mapStateToProps = (state) => {
	return { formValues: state.form.menuForm.values };
};

export default connect(mapStateToProps, { submitMenu })(MenuFormReview);
