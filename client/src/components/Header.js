import React from "react";

const Header = () => {
    return (
        <div className='top-header'>
            <div className='ui label top-header__user-info'>
                <i className='user outline icon heading-2'></i>{" "}
                <span className='heading-2'>Ponhvath</span>
            </div>
            <div className='logo heading-1'>Fast horse</div>
            <div className='top-header__sign-in-button'>
                <button className='ui teal button'>
                    <span className='heading-2'>Sign In / Sign Up</span>
                </button>
            </div>
        </div>
    );
};

export default Header;
