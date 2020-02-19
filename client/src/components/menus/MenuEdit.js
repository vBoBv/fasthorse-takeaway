// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { fetchMenus, fetchMenu } from '../../actions';

// import Spinner from '../Spinner';

// class MenuEdit extends Component {
// 	componentDidMount() {
// 		this.props.fetchMenus();
// 		// this.props.fetchMenu(this.props.match.params.id);
// 	}

// 	render() {
// 		console.log(this.props.selectedMenu);
// 		if (!this.props.selectedMenu) {
// 			return <Spinner message='Laoding up your menu. Please wait...' />;
// 		}
// 		return <div>{this.props.selectedMenu.menuName}</div>;
// 	}
// }

// const mapStateToProps = (state, ownProps) => {
// 	return {
// 		selectedMenu: state.menu[ownProps.match.params.id]
// 	};
// };

// export default connect(mapStateToProps, { fetchMenus, fetchMenu })(MenuEdit);

import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { fetchMenus } from '../../actions';

import MenuForm from './MenuForm';
import MenuFormReview from './MenuFormReview';
import Spinner from '../Spinner';

class MenuEdit extends Component {
	componentDidMount() {
		this.props.fetchMenus();
	}

	state = { showFormReview: false };

	renderContent() {
		if (!this.props.selectedMenu) {
			return <Spinner message='Loading up your menu. Please wait...' />;
		} else {
			if (this.state.showFormReview) {
				return (
					<MenuFormReview
						onCancel={() => this.setState({ showFormReview: false })}
						formValues={this.props.selectedMenu}
						// submitMenu={() => this.props.submitMenu(this.props.formValues)}
					/>
				);
			} else {
				return (
					<MenuForm
						initialValues={this.props.selectedMenu}
						onMenuSubmit={() => this.setState({ showFormReview: true })}
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
	return { selectedMenu: state.menu[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchMenus })(
	reduxForm({
		form: 'menuForm',
		destroyOnUnmount: false
	})(MenuEdit)
);
