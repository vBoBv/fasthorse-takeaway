import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import fetchMenus from '../../actions';

class MenuDelete extends Component {
	componentDidMount() {
		this.props.fetchMenus();
	}

	renderActions() {
		const { id } = this.props.match.params;

		return (
			<React.Fragment>
				<button
					onClick={() => this.props.deleteStream(id)}
					className='ui button negative'>
					Delete
				</button>
				<Link to='/' className='ui button'>
					Cancel
				</Link>
			</React.Fragment>
		);
	}

	renderContent() {
		if (!this.props.selectedMenu) {
			return 'Are you sure you want to delete this stream?';
		}

		return `Are you sure you want to delete the stream with title: ${this.props.selectedMenu.menuName}`;
	}

	render() {
		return (
			<Modal
				title='Delete Menu'
				content={this.renderContent()}
				actions={this.renderActions()}
				onDismiss={() => history.push('/')}
			/>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return { selectedMenu: state.menu[ownProps.match.params.id] };
};

export default connect(mapStateToProps)(MenuDelete);
