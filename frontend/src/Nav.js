import React from 'react';
import { Link } from 'react-router-dom';

const Nav = props => {
  return (
    <div className="link">
        
        <Link  to="/blogs">Home</Link>
        <span> </span>
        <Link to="/blogs/new">Create Blog</Link>
        <br/>
        <br/>
    </div>
  )
};

export default Nav;