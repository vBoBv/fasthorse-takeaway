import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import history from "../../history";

import Modal from "../Modal";

class UserAuthentication extends Component {
    renderContent() {
        // console.log(this.props.auth);
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <div className='user-authentication__content'>
                        <a
                            href='/auth/google'
                            className='ui google plus button user-authentication__button user-authentication__link'
                        >
                            <h1>
                                <i className='google plus icon'></i>
                                Google Plus
                            </h1>
                        </a>
                        <a
                            href='/auth/facebook'
                            className='ui facebook button user-authentication__button user-authentication__link'
                        >
                            <h1>
                                <i className='facebook icon'></i>
                                Facebook
                            </h1>
                        </a>
                        <a
                            href='/auth/linkedin'
                            className='ui linkedin button user-authentication__button user-authentication__link'
                        >
                            <h1>
                                <i className='linkedin icon'></i>
                                LinkedIn
                            </h1>
                        </a>
                    </div>
                );
            default:
                return (
                    <div className='user-authentication__logout'>
                        <h2>Are you sure you want to log out?</h2>
                    </div>
                );
        }
    }

    renderHeader() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <div>
                        <h2>Please select one of the options:</h2>
                    </div>
                );
            default:
                return (
                    <div>
                        <h2>Thank you for visiting...</h2>
                    </div>
                );
        }
    }

    renderAction() {
        switch (this.props.auth) {
            case null:
            case false:
                return;
            default:
                return (
                    <React.Fragment>
                        <a
                            href='/api/logout'
                            className='user-authentication__link'
                        >
                            <button className='ui button negative'>
                                Log out
                            </button>
                        </a>

                        <Link to='/' className='ui button'>
                            Cancel
                        </Link>
                    </React.Fragment>
                );
        }
    }

    render() {
        return (
            <div>
                <Modal
                    title={this.renderHeader()}
                    content={this.renderContent()}
                    actions={this.renderAction()}
                    onDismiss={() => history.push("/")}
                />
            </div>
        );
    }
}

const mapStateToProps = ({ auth }) => {
    return {
        auth
    };
};

export default connect(mapStateToProps)(UserAuthentication);
