import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchMenus } from '../../actions';

import Spinner from '../Spinner';

class MenuList extends Component {
	componentDidMount() {
		this.props.fetchMenus();
	}

	renderMenuList() {
		if (this.props.menu.length === 0) {
			return <Spinner message='Preparing your menu lists. Please wait...' />;
		}

		if (this.props.menu.length < 0) {
			return 'Error Fetching Lists. Please try again.';
		}

		if (this.props.menu.length > 0) {
			return this.renderList();
		}
	}

	renderActionButton(menuId) {
		return (
			<div className='ui large buttons'>
				<button className='ui negative button'>
					<i className='close icon'></i>Delete
				</button>
				<div className='or'></div>
				<Link to={`/menus/edit/${menuId}`} className='ui black button'>
					<i className='trash alternate outline icon'></i>Edit
				</Link>
				<div className='or'></div>
				<Link to={`/menus/${menuId}`} className='ui teal button'>
					<i className='expand icon'></i>Preview
				</Link>
			</div>
		);
	}

	renderList() {
		return this.props.menu.map((eachMenu) => {
			return (
				<div className='menu-list__group-list' key={eachMenu._id}>
					<div className='menu-list__menu-name'>
						<i className='list alternate outline icon'></i> {eachMenu.menuName}
					</div>
					<div className='menu-list__menu-description'>
						{eachMenu.menuDescription}
					</div>
					<div className='menu-list__action-buttons'>
						{this.renderActionButton(eachMenu._id)}
					</div>
				</div>
			);
		});
	}

	renderNewMenuButton() {
		return (
			<div className='menu-list__new-menu-button'>
				<Link to='/menus/new' className='ui big violet button'>
					<i className='plus square outline icon'></i>Create New Menu
				</Link>
			</div>
		);
	}

	render() {
		// console.log(this.props.menu);
		return (
			<div className='menu-list'>
				{this.renderMenuList()}
				{this.renderNewMenuButton()}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { menu: Object.values(state.menu) };
};

export default connect(mapStateToProps, { fetchMenus })(MenuList);
