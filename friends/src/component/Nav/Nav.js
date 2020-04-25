import React from 'react';
import './Nav.scss';

import { NavLink } from 'react-router-dom';

const Nav = (props) => {
        return (
        <div className="Nav">
            <nav>
                <NavLink to='/login'>Home</NavLink>
                <NavLink to='/friends'>Friends</NavLink>
            </nav>
            
    </div>
    );
}

export default Nav;