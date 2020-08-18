import React from 'react';
import BlogForm from './BlogForm'
import SearchBox from './SearchBox'
import BlogList from './BlogList'

import "bootstrap/dist/css/bootstrap.min.css";

 import './App.css';

class App extends React.Component{

  state ={
    blogs: [],
    comments: []
  }


  fetchBlogs = () => {
    fetch('http://localhost:3000/blogs')
    .then(res => res.json())
    .then( blogs => this.setState({
      blogs: blogs
    }))
  } 

  fetchComments = () => {
    fetch('http://localhost:3000/comments')
     .then(res => res.json())
     .then(comments => this.setState({
       comments: comments
     }))
  }

  componentDidMount () {
    this.fetchBlogs ()
     this.fetchComments()
   }
 
  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button>Show/hide new poem form</button>
          {false && <BlogForm />}
        </div>
        <SearchBox />
        <BlogList blogs={this.state.blogs} />
       
      </div>
    );
  }
}

export default App;



