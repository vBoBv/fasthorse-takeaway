import React, { Component } from "react";
import { connect } from "react-redux";

class Menu extends Component {
    renderMenu() {
        switch (this.props.auth) {
            case null:
                return null;
            case false:
                return <div>Menu</div>;
            default:
                return <div>Menu, Hi {this.props.auth.username}</div>;
        }
    }

    render() {
        return this.renderMenu();
    }
}

const mapStateToProps = ({ auth }) => {
    return { auth };
};

export default connect(mapStateToProps)(Menu);
