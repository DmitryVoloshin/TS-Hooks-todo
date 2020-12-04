import React from 'react';

import './header.css'

const Header: React.FC = ( ) =>{
    return(
        <header className="main-header_block">
            <div className="header-block_navigation">
                <a href="#" className="block-navigation_logo">Todo</a>
                <ul className="block-navigation_list">
                    <li className="navigation-list_item">
                        <a href="#" className="navigation-list_link">
                            List
                        </a>
                    </li>
                    <li className="navigation-list_item">
                        <a href="#" className="navigation-list_link">
                            About
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header;