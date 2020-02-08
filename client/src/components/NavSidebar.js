import React from "react";
import { Link } from "react-router-dom";

const NavSidebar = () => {
    return (
        <div className='nav-sidebar'>
            {/* <nav className='sidebar'> */}
            <ul className='side-nav'>
                <li className='side-nav__item side-nav__item--active'>
                    <Link to='/' className='side-nav__link'>
                        <span>Menu</span>
                    </Link>
                </li>
                <li className='side-nav__item'>
                    <Link to='/contactus' className='side-nav__link'>
                        <span>Contact</span>
                    </Link>
                </li>
                <li className='side-nav__item'>
                    <Link to='/menus/new' className='side-nav__link'>
                        <span>Create New Menu</span>
                    </Link>
                </li>
                <li className='side-nav__item'>
                    <Link to='/menus/list' className='side-nav__link'>
                        <span>All Menu</span>
                    </Link>
                </li>
            </ul>
            <div className='legal'>&copy; All rights reserved.</div>
            {/* </nav> */}
        </div>
    );
};

export default NavSidebar;
