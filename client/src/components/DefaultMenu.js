import React from 'react';
import { connect } from 'react-redux';
import ReusableMenu from './ReusableMenu';

const DefaultMenu = ({ defaultMenu }) => {
	return <ReusableMenu menuData={defaultMenu.item} />;
};

const mapStateToProps = (state) => {
	return { defaultMenu: state.defaultMenu };
};

export default connect(mapStateToProps)(DefaultMenu);
