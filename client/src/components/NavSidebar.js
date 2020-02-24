import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class NavSidebar extends Component {
	renderButton() {
		switch (this.props.auth) {
			case null:
				return;
			case false:
				return null;
			default:
				return (
					<React.Fragment>
						<li className={`side-nav__item`}>
							<Link to={'/menus/new'} className='side-nav__link'>
								<span>Create New Menu</span>
							</Link>
						</li>
						<li className={`side-nav__item`}>
							<Link to='/menus/list' className='side-nav__link'>
								<span>All Menu</span>
							</Link>
						</li>
					</React.Fragment>
				);
		}
	}

	render() {
		return (
			<div className='nav-sidebar'>
				<ul className='side-nav'>
					<li className={`side-nav__item`}>
						<Link to='/' className='side-nav__link'>
							<span>Menu</span>
						</Link>
					</li>
					<li className={`side-nav__item`}>
						<Link to='/contactus' className='side-nav__link'>
							<span>Contact</span>
						</Link>
					</li>
					{this.renderButton()}
				</ul>
				<div className='legal'>&copy; All rights reserved.</div>
			</div>
		);
	}
}

const mapStateToProps = ({ auth }) => {
	return { auth };
};

export default connect(mapStateToProps)(NavSidebar);
