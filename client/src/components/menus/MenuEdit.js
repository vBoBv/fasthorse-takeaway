// import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { fetchMenu, editMenu } from '../../actions';

import MenuForm from './MenuForm';
import MenuFormReview from './MenuFormReview';
import Spinner from '../Spinner';

class MenuEdit extends Component {
	componentDidMount() {
		this.props.fetchMenu(this.props.match.params.id);
	}

	state = { showFormReview: false };

	// onSubmit = (formValues) => {
	// 	this.props.editMenu(this.props.match.params.id, formValues);
	// };

	renderContent() {
		if (!this.props.selectedMenu) {
			return <Spinner message='Loading up your menu. Please wait...' />;
		} else {
			if (this.state.showFormReview) {
				return (
					<MenuFormReview
						onCancel={() => this.setState({ showFormReview: false })}
						// formValues={this.props.selectedMenu}
						// submitMenu={() => this.props.submitMenu(this.props.formValues)}
						// submitMenu={() => console.log(this.props.selectedMenu)}
						// submitMenu={() =>
						// 	console.log(
						// 		_.pick(
						// 			this.props.selectedMenu,
						// 			'menuName',
						// 			'menuDescription',
						// 			'item'
						// 		)
						// 	)
						// }
						// submitMenu={this.onSubmit(
						// 	_.pick(
						// 		this.props.selectedMenu,
						// 		'menuName',
						// 		'menuDescription',
						// 		'item'
						// 	)
						// )}
						formValues={this.props.editedValues}
						submitMenu={() =>
							this.props.editMenu(
								this.props.match.params.id,
								this.props.editedValues
							)
						}
						actionTitle='Edit'
					/>
				);
			} else {
				return (
					<MenuForm
						initialValues={this.props.selectedMenu}
						onMenuSubmit={() => this.setState({ showFormReview: true })}
						title='Edit Menu'
					/>
				);
			}
		}
	}

	render() {
		return <div className='menu-create'>{this.renderContent()}</div>;
	}
}

const mapStateToProps = (state, ownProps) => {
	if (!state.form.menuForm) {
		return {
			selectedMenu: state.menu[ownProps.match.params.id],
			editedValues: null
		};
	} else {
		return {
			selectedMenu: state.menu[ownProps.match.params.id],
			editedValues: state.form.menuForm.values
		};
	}
};

export default connect(mapStateToProps, { fetchMenu, editMenu })(
	reduxForm({
		form: 'menuForm',
		destroyOnUnmount: false
	})(MenuEdit)
);
