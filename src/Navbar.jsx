import React from 'react';
import logo from './assets/stocktwits-logo.png';

const Navbar = props => {
    return (
        <div id='headerWithLogo'>
            <img src={logo} width="50" height="50" className="d-inline-block align-top" alt="imageLogo" />
            <span className='brandName'>STOCKTWITS TRACKER</span>
        </div>
    );
}
export default Navbar;

