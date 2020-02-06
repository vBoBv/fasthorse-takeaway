import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import "../sass/App.scss";

import NavBar from "./NavBar";
import Menu from "./Menu";
import Header from "./Header";
import NavSideBar from "./NavSidebar";
import MainContent from "./MainContent";

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div className='grid-container'>
                        {/* <NavBar />
                        <Route exact path='/' component={Menu} /> */}
                        <Header />
                        <NavSideBar />
                        <MainContent />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default connect(null, actions)(App);
