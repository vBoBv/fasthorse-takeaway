import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMenus } from '../../actions';

import ReusableMenu from '../ReusableMenu';
import Spinner from '../Spinner';

class MenuShow extends Component {
	componentDidMount() {
		this.props.fetchMenus();
	}

	// state = { data: null };

	renderMenu() {
		if (this.props.selectedMenu) {
			return <ReusableMenu menuData={this.props.selectedMenu.item} />;
		} else {
			return null;
		}
	}
	render() {
		return <div className='menu-show'>{this.renderMenu()}</div>;
	}
}

const mapStateToProps = (state, ownProps) => {
	return { selectedMenu: state.menu[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchMenus })(MenuShow);
