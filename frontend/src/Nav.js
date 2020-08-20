import React from 'react';
import { Link } from 'react-router-dom';

const Nav = props => {
  return (
    <div>
        
        <Link to="/home">Home</Link>
        <span> </span>
        <Link to="/blog-form">Create Blog</Link>
        <br/>
        <br/>
    </div>
  )
};

export default Nav;