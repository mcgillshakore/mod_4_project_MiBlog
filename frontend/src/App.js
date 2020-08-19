import React from 'react';
import BlogForm from './BlogForm'
import SearchBox from './SearchBox'
import BlogList from './BlogList'
import Header from './Header'
import "bootstrap/dist/css/bootstrap.min.css";

 import './App.css';
 const blogUrl = 'http://localhost:3000/blogs'
 const commentUrl = 'http://localhost:3000/comments'

class App extends React.Component{

  
  state = {
    blogs: [],
    comments: [], 
    searchField: ''
  }


  componentDidMount () {
    this.fetchBlogs ()
    this.fetchComments()
  }

  fetchBlogs = () => {
    fetch(blogUrl)
    .then(res => res.json())
    .then( blogs => this.setState({
      blogs: blogs.data
    }) )
  } 

  fetchComments = () => {
    fetch(commentUrl)
     .then(res => res.json())
     .then(comments => this.setState({
       comments: comments
     }))
  }

  addBlog = (blog) => {
    fetch(blogUrl, {
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

   onSearchChange = (e) => {
     console.log(e.target.value)
     this.setState({
       searchField: e.target.value
     })
   }

   sortBlogs = (e) => {
     this.setState({
       blogs: this.state.blogs.sort((a,b) => { return (a.attributes.title.localeCompare(b.attributes.title))} )
     })
   }
 
  render() {


    const filterBlogs = this.state.blogs.filter(blog => {
      return blog.attributes.title.toLowerCase().includes(
      this.state.searchField.toLocaleLowerCase()
    )})
  

    return (
      <div className="app">

        <div>
        <Header />
        </div>
        <BlogForm />
        <SearchBox 
        onSearchChange={this.onSearchChange} 
        sortBlogs = {this.sortBlogs}
        />
        <div>
        <BlogList blogs={filterBlogs} />
        </div>

      </div>
    );
  }
}

export default App;



