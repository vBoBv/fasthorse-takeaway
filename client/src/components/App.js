import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import history from "../history";

import "../sass/App.scss";

import Header from "./header/Header";
import UserAuthentication from "./header/UserAuthentication";
import NavSideBar from "./NavSidebar";
import Menu from "./Menu";
import ContactUs from "./ContactUs";
import MenuCreate from "./menus/MenuCreate";
import MenuEdit from "./menus/MenuEdit";
import MenuDelete from "./menus/MenuDelete";
import MenuList from "./menus/MenuList";

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <div className='grid-style'>
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
                        <Route path='/contactus' exact component={ContactUs} />
                        <Route path='/menus/new' exact component={MenuCreate} />
                        <Route
                            path='/menus/edit/:id'
                            exact
                            component={MenuEdit}
                        />
                        <Route
                            path='/menus/delete/:id'
                            exact
                            component={MenuDelete}
                        />
                        <Route path='/menus/list' exact component={MenuList} />
                    </div>
                </Router>
            </div>
        );
    }
}

export default connect(null, actions)(App);
