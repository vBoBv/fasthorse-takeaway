import React from "react";

const NavSidebar = () => {
    return (
        <div className='nav-sidebar'>
            {/* <nav className='sidebar'> */}
            <ul className='side-nav'>
                <li className='side-nav__item side-nav__item--active'>
                    <a href='#' className='side-nav__link'>
                        <span>Menu</span>
                    </a>
                </li>
                <li className='side-nav__item'>
                    <a href='#' className='side-nav__link'>
                        <span>Contact</span>
                    </a>
                </li>
                <li className='side-nav__item'>
                    <a href='#' className='side-nav__link'>
                        <span>Create New Menu</span>
                    </a>
                </li>
                <li className='side-nav__item'>
                    <a href='#' className='side-nav__link'>
                        <span>All Menu</span>
                    </a>
                </li>
            </ul>
            <div className='legal'>&copy; All rights reserved.</div>
            {/* </nav> */}
        </div>
    );
};

export default NavSidebar;
