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
								<span>
									<i className='plus icon side-nav__icon'></i>
									<span className='side-nav__icon-name'>Create New Menu</span>
								</span>
							</Link>
						</li>
						<li className={`side-nav__item`}>
							<Link to='/menus/list' className='side-nav__link'>
								<span>
									<i className='list icon side-nav__icon'></i>
									<span className='side-nav__icon-name'>All Menu</span>
								</span>
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
							<span>
								<i className='utensils icon side-nav__icon'></i>
								<span className='side-nav__icon-name'>Menu</span>
							</span>
						</Link>
					</li>
					<li className={`side-nav__item`}>
						<Link to='/contactus' className='side-nav__link'>
							<span>
								<i className='phone icon side-nav__icon'></i>
								<span className='side-nav__icon-name'>Contact</span>
							</span>
						</Link>
					</li>
					{this.renderButton()}
				</ul>
				<div className='legal'>
					&copy; Fast Horse Takeaways By Ponhvath Vann.
					<div>All rights reserved</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = ({ auth }) => {
	return { auth };
};

export default connect(mapStateToProps)(NavSidebar);
