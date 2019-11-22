import React from 'react';
import logo from './assets/logo.png';

const Navbar = props => {
    return (
        <div id='headerWithLogo'>
            <img src={logo} width="80" height="80" className="d-inline-block align-top" alt="imageLogo" />
            <span className='brandName'>STOCKTWITS TRACKER</span>
        </div>
    );
}
export default Navbar;

