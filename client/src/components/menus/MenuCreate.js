import React, { Component } from 'react';
import MenuForm from './MenuForm';
import MenuFormReview from './MenuFormReview';
import { reduxForm } from 'redux-form';

class MenuCreate extends Component {
	state = { showFormReview: false };

	renderContent() {
		if (this.state.showFormReview) {
			return (
				<MenuFormReview
					onCancel={() => this.setState({ showFormReview: false })}
				/>
			);
		} else {
			return (
				<MenuForm
					onMenuSubmit={() => this.setState({ showFormReview: true })}
				/>
			);
		}
	}

	render() {
		return <div className='menu-create'>{this.renderContent()}</div>;
	}
}

export default reduxForm({ form: 'menuForm' })(MenuCreate);
