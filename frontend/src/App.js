import React from 'react';
import BlogForm from './BlogForm'
import SearchBox from './SearchBox'
import BlogList from './BlogList'
import Header from './Header'
import Nav from './Nav'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';
import BlogCard from './BlogCard';
const url = 'http://localhost:3000/blogs'
const commentUrl = 'http://localhost:3000/comments'



class App extends React.Component{

  state = {
    blogs: [],
    comments: [], 
    searchField: ''
  }

  fetchBlogs = () => {
    fetch(url)
    .then(res => res.json())
    .then( blogs => this.setState({
      blogs: blogs.data
    }) )
  } 

  componentDidMount () {
    this.fetchBlogs ()
    this.fetchComments()
  }

  fetchComments = () => {
    fetch(commentUrl)
     .then(res => res.json())
     .then(comments => this.setState({
       comments: comments.data
     }))
  }


  createBlog = (newBlog) => {
    fetch('http://localhost:3000/blogs', {
      method:"POST",
      headers:{ "Content-type":"application/json"},
      body: JSON.stringify({
        title:newBlog.title,
        image_url:newBlog.image_url,
        content:newBlog.content,
        user_id:5,
        likes:0
      })
    })
    .then(res => res.json())
    .then(blogAdded => console.log(blogAdded))
    //   this.setState({
    //   blogs: [...this.state.blogs, blogAdded]
    // }))
  }

  deleteBlog = (currentBlog) => {
    fetch(`http://localhost:3000/blogs/${currentBlog.id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json"
      }
    })
    .then(res => res.json())
    .then(blogDeleted => this.setState({
      blogs: this.state.blogs.filter(blog => blog.id !== currentBlog.id)
    }))
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
       <Header /> 
       <BrowserRouter>
       <Nav history={this.props.location} />
       <Route  path="/blogs/new" render={(routerProps) => <BlogForm {...routerProps} createBlog={this.createBlog} history={this.props.location} /> }/>
       <Route exact path="/blogs" render={(routerProps) => <SearchBox onSearchChange={this.onSearchChange} sortBlogs = {this.sortBlogs}/>} />
       <Route exact path="/blogs" render={(routerProps) => <BlogList {...routerProps} blogs={filterBlogs} deleteBlog={this.deleteBlog} />} />
       <Route path="/blogs/:id"  component={BlogCard}  />
       </BrowserRouter>
      </div>
    );
  }
}

export default App;



