import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMenus } from "../../actions";

class MenuList extends Component {
    componentDidMount() {
        this.props.fetchMenus();
    }

    render() {
        return <div>Menu List{this.props.menu.title}</div>;
    }
}

const mapStateToProps = ({ menu }) => {
    return { menu };
};

export default connect(mapStateToProps, { fetchMenus })(MenuList);
