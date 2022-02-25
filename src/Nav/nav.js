import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.scss';
const Nav = () => {
    return (
        <div className="topnav">
            <NavLink to='/'>Home</NavLink>
            <NavLink to="blog">Blog</NavLink>
            <NavLink to="youtube">Youtube</NavLink>
            <NavLink to="about">About</NavLink>
        </div>
    )
}

export  default Nav;