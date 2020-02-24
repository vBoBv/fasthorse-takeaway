import React from 'react';
import { reduxForm, FieldArray, Field } from 'redux-form';
// import { connect } from 'react-redux';
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
		<div className='menu-form__action-buttons ui large buttons'>
			<button
				type='button'
				disabled={pristine}
				onClick={reset}
				className='ui negative button'>
				<i className='exclamation circle icon'></i>Reset to default
			</button>
			<div className='or'></div>
			<Link to='/menus/list' className='ui black button'>
				<i className='close icon'></i>Cancel
			</Link>
			<div className='or'></div>
			<button type='submit' className='ui teal button'>
				<i className='expand icon'></i>Preview
			</button>
		</div>
	);
};

const renderMenuDetail = () => {
	return (
		<div className='ui big form'>
			<div className='two fields'>
				<div className='field'>
					<Field
						name='menuName'
						type='text'
						component={MenuField}
						label='Menu Name'
					/>
				</div>
				<div className='field'>
					<Field
						name='menuDescription'
						type='text'
						component={MenuField}
						label='Menu Description'
					/>
				</div>
			</div>
		</div>
	);
};

const MenuForm = ({ handleSubmit, pristine, reset, onMenuSubmit, title }) => {
	return (
		<div className='menu-form'>
			<h1 className='menu-form__title-header'>{title}</h1>
			<form onSubmit={handleSubmit(onMenuSubmit)}>
				{renderMenuDetail()}
				<FieldArray name='item' component={renderFoodCategory} />
				{renderActionButton(pristine, reset)}
			</form>
		</div>
	);
};

export default reduxForm({
	form: 'menuForm',
	validate,
	enableReinitialize: true,
	keepDirtyOnReinitialize: true,
	destroyOnUnmount: false
})(MenuForm);

// const mapStateToProps = (state) => {
// 	return {
// 		initialValues: state.initialFormValues
// 	};
// };

// export default connect(mapStateToProps)(
// 	reduxForm({
// 		form: 'menuForm',
// 		validate,
// 		enableReinitialize: true,
// 		keepDirtyOnReinitialize: true,
// 		destroyOnUnmount: false
// 	})(MenuForm)
// );
