import React from 'react';
import { Link } from 'react-router-dom'

import './header.css'

const Header: React.FC = ( ) =>{
    return(
        <header className="main-header_block">
            <div className="header-block_navigation">
                <a href="#" className="block-navigation_logo">Todo</a>
                <ul className="block-navigation_list">
                    <li className="navigation-list_item">
                        <Link to="/" className="navigation-list_link">
                            List
                        </Link>
                    </li>
                    <li className="navigation-list_item">
                        <Link to="/About" className="navigation-list_link">
                            About
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header;