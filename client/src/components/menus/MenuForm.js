import React from 'react';
import { reduxForm, FieldArray, Field } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import validate from '../../utils/validate';
// import validatePrice from "../../utils/validatePrice";
import AddField from '../../utils/AddField';
import RemoveField from '../../utils/RemoveField';

import MenuField from './MenuField';
// import MenuPreview from "./MenuPreview";

const renderBackgroundColor = (index) => {
	if (index % 2 === 0) {
		return 'menu-form__background-grey-1';
	} else {
		return 'menu-form__background-grey-2';
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
		<div className='menu-form__action-buttons'>
			<Link to='/menus/list' className='ui secondary button'>
				Cancel
			</Link>
			<button type='submit' className='ui teal button'>
				Next
				<i className='check icon'></i>
			</button>
			<button
				type='button'
				disabled={pristine}
				onClick={reset}
				className='ui negative button'>
				Reset Form
			</button>
		</div>
	);
};

const MenuForm = ({ handleSubmit, pristine, reset, onMenuSubmit, form }) => {
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
	return { initialValues: state.initialFormValues };
};

export default connect(mapStateToProps)(
	reduxForm({
		form: 'menuForm',
		validate,
		enableReinitialize: true,
		destroyOnUnmount: false
	})(MenuForm)
);

// import _ from "lodash";
// import React, { Component } from "react";
// import { reduxForm, Field } from "redux-form";
// import { Link } from "react-router-dom";
// import validatePrice from "../../utils/validatePrice";

// import formFields from "./formFields";

// import MenuField from "./MenuField";
// import MenuPreview from "./MenuPreview";

// class MenuForm extends Component {
//     renderFields() {
//         return _.map(formFields, ({ label, name }) => {
//             return (
//                 <Field
//                     key={name}
//                     component={MenuField}
//                     type='text'
//                     label={label}
//                     name={name}
//                 />
//             );
//         });
//     }

//     render() {
//         return (
//             <React.Fragment>
//                 <div className='menu-create__form'>
//                     <form
//                         onSubmit={this.props.handleSubmit(
//                             this.props.onMenuSubmit
//                         )}
//                     >
//                         {this.renderFields()}
//                         <Link to='/menus/list' className='ui secondary button'>
//                             Cancel
//                         </Link>
//                         <button type='submit' className='ui teal button'>
//                             Next
//                             <i className='check icon'></i>
//                         </button>
//                     </form>
//                 </div>
//                 <MenuPreview />
//             </React.Fragment>
//         );
//     }
// }

// const validate = (values) => {
//     const errors = {};

//     // if (!values.title) {
//     //     errors.name = "You must enter a title";
//     // }
//     // if (!values.price) {
//     //     errors.price = "You must enter a price";
//     // }
//     // if (!values.description) {
//     //     errors.description = "You must enter a description";
//     // }

//     errors.price = validatePrice(values.price);

//     _.each(formFields, ({ name }) => {
//         if (!values[name]) {
//             errors[name] = `You must provide a ${name}`;
//         }
//     });

//     return errors;
// };

// export default reduxForm({
//     form: "menuForm",
//     validate,
//     destroyOnUnmount: false
// })(MenuForm);
