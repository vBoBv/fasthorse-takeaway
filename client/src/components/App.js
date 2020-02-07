import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import history from "../history";

import "../sass/App.scss";

import Menu from "./Menu";
import Header from "./Header";
import NavSideBar from "./NavSidebar";
import MainContent from "./MainContent";
import UserAuthentication from "./UserAuthentication";

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
                        <MainContent />
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
