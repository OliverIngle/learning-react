import React from 'react';
import { Link } from 'react-router-dom';

export default function NavigationMenu(props) {
    const navLinkClass = "text-blue-500 py-3 border-b block px-3"

    return (
        <ul>
            <li>
                <Link 
                    to="/"
                    className={navLinkClass}
                    onClick={props.closeMenu}
                >
                    Home
                </Link>
            </li>
            <li>
                <Link
                    to="/about"
                    className={navLinkClass}
                    onClick={props.closeMenu}
                >
                    About
                </Link>
            </li>
            <li>
                <Link
                    to="/contact"
                    className={navLinkClass}
                    onClick={props.closeMenu}
                >
                    Contact
                </Link>
            </li>
        </ul>
    )
}
