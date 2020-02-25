import React, { Component } from 'react';
import MenuForm from './MenuForm';
import MenuFormReview from './MenuFormReview';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { submitMenu } from '../../actions';

class MenuCreate extends Component {
	state = { showFormReview: false };

	renderContent() {
		if (this.state.showFormReview) {
			return (
				<MenuFormReview
					onCancel={() => this.setState({ showFormReview: false })}
					formValues={this.props.formValues}
					submitMenu={() => this.props.submitMenu(this.props.formValues)}
					actionTitle='Create'
				/>
			);
		} else {
			return (
				<MenuForm
					initialValues={this.props.initialValues}
					onMenuSubmit={() => this.setState({ showFormReview: true })}
					title='Create Menu'
				/>
			);
		}
	}

	render() {
		return <div className='menu-create'>{this.renderContent()}</div>;
	}
}

const mapStateToProps = (state) => {
	if (state.initialFormValues && !state.form.menuForm) {
		return {
			initialValues: state.initialFormValues,
			formValues: ''
		};
	} else {
		return {
			initialValues: state.initialFormValues,
			formValues: state.form.menuForm.values
		};
	}
};

export default connect(mapStateToProps, { submitMenu })(
	reduxForm({
		form: 'menuForm',
		enableReinitialize: true
	})(MenuCreate)
);
