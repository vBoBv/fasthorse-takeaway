import React from 'react';
import { connect } from 'react-redux';
import ResuableMenu from './ResuableMenu';

const DefaultMenu = ({ defaultMenu }) => {
	return <ResuableMenu menuData={defaultMenu.item} />;
};

const mapStateToProps = (state) => {
	return { defaultMenu: state.defaultMenu };
};

export default connect(mapStateToProps)(DefaultMenu);
