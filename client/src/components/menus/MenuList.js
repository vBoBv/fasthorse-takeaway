import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMenus } from '../../actions';

import Spinner from '../Spinner';

class MenuList extends Component {
	componentDidMount() {
		this.props.fetchMenus();
	}

	renderMenuList() {
		switch (this.props.menu.length) {
			case 0:
				return <Spinner message='Preparing your menu lists. Please wait...' />;
			case -1:
				return 'Error Fetching Lists. Please try again.';
			default:
				return this.renderList();
		}
	}

	renderActionButton() {
		return (
			<div className='ui large buttons'>
				<button className='ui negative button'>
					<i className='close icon'></i>Delete
				</button>
				<div className='or'></div>
				<button className='ui black button'>
					<i className='trash alternate outline icon'></i>Edit
				</button>
				<div className='or'></div>
				<button className='ui teal button'>
					<i className='expand icon'></i>Preview
				</button>
			</div>
		);
	}

	renderList() {
		return this.props.menu.map((eachMenu) => {
			return (
				<div className='menu-list__group-list' key={eachMenu.menuName}>
					<div className='menu-list__menu-name'>
						<i className='list alternate outline icon'></i> {eachMenu.menuName}
					</div>
					<div className='menu-list__menu-description'>
						{eachMenu.menuDescription}
					</div>
					<div className='menu-list__action-buttons'>
						{this.renderActionButton()}
					</div>
				</div>
			);
		});
	}

	render() {
		return <div className='menu-list'>{this.renderMenuList()}</div>;
	}
}

const mapStateToProps = ({ menu }) => {
	console.log(menu);
	return { menu };
};

export default connect(mapStateToProps, { fetchMenus })(MenuList);
