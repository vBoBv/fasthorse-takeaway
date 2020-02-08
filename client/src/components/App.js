import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import history from "../history";

import "../sass/App.scss";

import Header from "./Header/Header";
import NavSideBar from "./NavSidebar";
import Menu from "./Menu";
import UserAuthentication from "./Header/UserAuthentication";

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <div>
                <Router history={history}>
                    <div className='grid-container'>
                        <Header />
                        <NavSideBar />
                        <Route path='/' component={Menu} />
                        <Route
                            exact
                            path='/authentication'
                            component={UserAuthentication}
                        />
                    </div>
                </Router>
            </div>
        );
    }
}

export default connect(null, actions)(App);
