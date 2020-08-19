import React from 'react';
import BlogForm from './BlogForm'
import SearchBox from './SearchBox'
import BlogList from './BlogList'
import "bootstrap/dist/css/bootstrap.min.css";

 import './App.css';
 const url = 'http://localhost:3000/blogs'

class App extends React.Component{

  state = {
    blogs: [],
    comments: []
  }

  componentDidMount () {
    this.fetchBlogs ()
    this.fetchComments()
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

  addBlog = (blog) => {
    fetch(url, {
      method: 'POST',
      headers: {'Content-type': "application/json"},
      body: JSON.stringify({
        title: blog.name,
        image: blog.image,
        content: blog.content,
        Likes: 0
      })
    }).then(resp => resp.json())
      .then(blog => console.log(blog))
  }

  render() {
    return (
      <div className="App">
        <div className="sidebar">
        <button>Show/hide new poem form</button>
        {false && <BlogForm addBlog={this.addBlog}/>}
        <SearchBox />
        <BlogList  blogs={this.state.blogs} />
        </div>
      </div>
    );
  }
}

export default App;



