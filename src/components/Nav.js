import React from 'react';
import { Link } from 'react-router-dom';


const Nav = () => {

    return (
        <nav>
            <h3>Logo</h3>
            <ul className="nav-links">
                <Link to="/news">
                <li>News</li>
                </Link>
                <Link to="/posts">
                <li>Blog</li>
                </Link>
            </ul>
        </nav>
    )

}

export default Nav