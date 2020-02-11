import _ from "lodash";
import React from "react";
import { reduxForm, FieldArray, Field } from "redux-form";
// import { Link } from "react-router-dom";
// import validatePrice from "../../utils/validatePrice";

import MenuField from "./MenuField";
// import MenuPreview from "./MenuPreview";


const renderFoodCategory = ({ fields }) => (
    <ul>
        <li>
            <button type='button' onClick={() => fields.push({})}>
                Add category
            </button>
        </li>
        {fields.map((category, index) => (
            <li key={index}>
                <button
                    type='button'
                    title='Remove Member'
                    onClick={() => fields.remove(index)}
                />
                <h4>Category #{index + 1}</h4>
                <Field
                    name={`${category}.foodCategory`}
                    type='text'
                    component={MenuField}
                    label='Food Category'
                />
                <FieldArray
                    name={`${category}.foodList`}
                    component={renderFoodList}
                />
            </li>
        ))}
    </ul>
);

const renderFoodList = ({ fields }) => (
    <ul>
        <li>
            <button type='button' onClick={() => fields.push({})}>
            Add Food List
            </button>
        </li>
        {fields.map((list, index) => (
            <li key={index}>
                <button
                    type='button'
                    title='Remove Member'
                    onClick={() => fields.remove(index)}
                />
                <h4>Food List #{index + 1}</h4>
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
            </li>
        ))}
    </ul>
);

const MenuForm = (props) => {
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
        <form onSubmit={handleSubmit}>
            <FieldArray name='item' component={renderFoodCategory} />
            <div>
                <button type='submit' disabled={submitting}>
                    Submit
                </button>
                <button
                    type='button'
                    disabled={pristine || submitting}
                    onClick={reset}
                >
                    Clear Values
                </button>
            </div>
        </form>
    );
};

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

export default reduxForm({
    form: "menuForm",
    // validate,
    destroyOnUnmount: false
})(MenuForm);

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
