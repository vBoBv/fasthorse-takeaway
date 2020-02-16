import React from 'react';
import { reduxForm, FieldArray, Field } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import validate from '../../utils/validate';
import AddField from '../../utils/AddField';
import RemoveField from '../../utils/RemoveField';
import MenuField from './MenuField';

const renderBackgroundColor = (index) => {
	if (index % 2 === 0) {
		return 'menu-form__background-grey-1';
	} else {
		return 'menu-form__background-grey-2';
	}
};

const conditionalRemoveField = (index) => {
	if (index === 0) {
		return true;
	}
};

const renderFoodCategory = ({ fields }) => (
	<div>
		<AddField
			title='Add Food Category'
			onClick={() => {
				fields.push({});
			}}
			label='Food Category'
		/>

		{fields.map((category, index) => (
			<div key={index} className='menu-form__category-item'>
				<div className='menu-form__header'>
					<div>
						<h4 className='heading-2'>Category #{index + 1}</h4>
					</div>

					<RemoveField
						title='Remove this category'
						onClick={() => fields.remove(index)}
						onDisable={conditionalRemoveField(index)}
					/>
				</div>
				<div className='ui massive form menu-form__category-header'>
					<div className='one fields'>
						<Field
							name={`${category}.category`}
							type='text'
							component={MenuField}
							label='Food Category Title'
						/>
					</div>
				</div>

				<FieldArray name={`${category}.foodList`} component={renderFoodList} />
			</div>
		))}
	</div>
);

const renderFoodList = ({ fields }) => (
	<div>
		{fields.map((list, index) => (
			<div
				key={index}
				className={`menu-form__foodList ${renderBackgroundColor(index)}`}>
				<div className='menu-form__header'>
					<div>
						<h4 className='heading-2'>Food #{index + 1}</h4>
					</div>
					<RemoveField
						title='Remove this food'
						onClick={() => fields.remove(index)}
						onDisable={conditionalRemoveField(index)}
					/>
				</div>

				<div className='ui big form'>
					<div className='three fields'>
						<Field
							name={`${list}.foodTitle`}
							type='text'
							component={MenuField}
							label='Food Title'
						/>
						<Field
							name={`${list}.foodPrice`}
							type='text'
							component={MenuField}
							label='Food Price'
						/>
						<Field
							name={`${list}.foodDescription`}
							type='text'
							component={MenuField}
							label='Food Description'
						/>
					</div>
				</div>
			</div>
		))}

		<AddField title='Add food' onClick={() => fields.push({})} label='Food' />
	</div>
);

const renderActionButton = (pristine, reset) => {
	return (
		<div class='menu-form__action-buttons ui large buttons'>
			<button
				type='button'
				disabled={pristine}
				onClick={reset}
				className='ui negative button'>
				<i class='close icon'></i>Reset Form
			</button>
			<div class='or'></div>
			<Link to='/menus/list' className='ui secondary button'>
				<i className='trash alternate outline icon'></i>Cancel
			</Link>
			<div class='or'></div>
			<button type='submit' className='ui teal button'>
				<i class='expand icon'></i>Preview
			</button>
		</div>
	);
};

const MenuForm = ({ handleSubmit, pristine, reset, onMenuSubmit }) => {
	return (
		<div className='menu-form'>
			<form onSubmit={handleSubmit(onMenuSubmit)}>
				<FieldArray name='item' component={renderFoodCategory} />
				{renderActionButton(pristine, reset)}
			</form>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		initialValues: state.initialFormValues
	};
};

export default connect(mapStateToProps)(
	reduxForm({
		form: 'menuForm',
		validate,
		enableReinitialize: true,
		keepDirtyOnReinitialize: true,
		destroyOnUnmount: false
	})(MenuForm)
);
