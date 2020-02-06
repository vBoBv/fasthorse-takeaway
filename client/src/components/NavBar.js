import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class NavBar extends Component {
    renderAuthentication() {
        // console.log(this.props.auth);
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <div>
                        <button>
                            <a href='/auth/google'>Login with Google</a>
                        </button>
                        <button>
                            <a href='/auth/facebook'>Login with Facebook</a>
                        </button>
                        <button>
                            <a href='/auth/facebook'>Login with LinkedIn</a>
                        </button>
                    </div>
                );
            default:
                return (
                    <button>
                        <a href='/api/logout'>Log out</a>
                    </button>
                );
        }
    }

    render() {
        return (
            <div>
                <Link to={this.props.auth ? "/" : "/hi"}>Logo</Link>
                {this.renderAuthentication()}
            </div>
        );
    }
}

const mapStateToProps = ({ auth }) => {
    return {
        auth
    };
};

export default connect(mapStateToProps)(NavBar);
