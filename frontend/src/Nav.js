import React from 'react';
import { Link } from 'react-router-dom';

const Nav = props => {
  return (
    <div className="link">
        <Link  to="/blogs">Home</Link>
        <span> </span>
        <Link to="/create-user">Create Account</Link>
        <span> </span>
        <Link to="/blogs/new">Create Blog</Link>
        <span> </span>
        <Link to="/">Logout</Link>
        <br/>
        <br/>
    </div>
  )
};

export default Nav;