import React from 'react';
import { Link } from 'react-router-dom';


const Nav = () => {

    return (
        <nav>
            <Link to="/">
            <p>Home</p>
            </Link>
            <ul className="nav-links">
                <Link to="/news">
                <li>News</li>
                </Link>
                <Link to="/posts">
                <li>Blog</li>
                </Link>
                <Link to="/posts/new">
                <i class="edit icon"></i>
                </Link>
            </ul>
        </nav>
    )

}

export default Nav