import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import validatePrice from "../../utils/validatePrice";

import formFields from "./formFields";

import MenuField from "./MenuField";

class MenuForm extends Component {
    renderFields() {
        return _.map(formFields, ({ label, name }) => {
            return (
                <Field
                    key={name}
                    component={MenuField}
                    type='number'
                    label={label}
                    name={name}
                />
            );
        });
    }

    render() {
        return (
            <div>
                <form
                    onSubmit={this.props.handleSubmit(this.props.onMenuSubmit)}
                >
                    {this.renderFields()}
                    <Link to='/menus/list' className='ui secondary button'>
                        Cancel
                    </Link>
                    <button type='submit' className='ui teal button'>
                        Next
                        <i className='check icon'></i>
                    </button>
                </form>
            </div>
        );
    }
}

const validate = (values) => {
    const errors = {};

    // if (!values.title) {
    //     errors.name = "You must enter a title";
    // }
    // if (!values.price) {
    //     errors.price = "You must enter a price";
    // }
    // if (!values.description) {
    //     errors.description = "You must enter a description";
    // }

    errors.price = validatePrice(values.price);

    _.each(formFields, ({ name }) => {
        if (!values[name]) {
            errors[name] = `You must provide a ${name}`;
        }
    });

    return errors;
};

export default reduxForm({
    form: "menuForm",
    validate,
    destroyOnUnmount: false
})(MenuForm);
