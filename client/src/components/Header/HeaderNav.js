import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class HeaderNav extends Component {
	renderAuthenticationButton() {
		switch (this.props.auth) {
			case null:
				return;
			case false:
				return (
					<button className='ui teal button'>
						<span className='heading-2'>Sign In / Sign Up</span>
					</button>
				);
			default:
				return (
					<button className='ui teal button'>
						<span className='heading-2'>Sign out</span>
					</button>
				);
		}
	}

	renderUserName() {
		switch (this.props.auth) {
			case null:
				return;
			case false:
				return 'Guest';
			default:
				return this.props.auth.username;
		}
	}

	render() {
		return (
			<div className='top-header'>
				<div className='ui label top-header__user-info'>
					<i className='user outline icon heading-2'></i>{' '}
					<span className='heading-2'>{this.renderUserName()}</span>
				</div>
				<div className='top-header__logo heading-1'>Fast horse</div>
				<div className='top-header__sign-in-button'>
					<Link to='/authentication'>{this.renderAuthenticationButton()}</Link>
				</div>
			</div>
		);
	}
}

const mapStateToProps = ({ auth }) => {
	return { auth };
};

export default connect(mapStateToProps)(HeaderNav);
