import React from 'react';
import BlogForm from './BlogForm'
import SearchBox from './SearchBox'
import BlogList from './BlogList'
import Header from './Header'
import Nav from './Nav'
// import Commentlist from './CommentList'

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
      method: "POST",
      headers: { "Content-type" : "application/json"},
      body: JSON.stringify({
        name: newBlog.title,
        image_url: newBlog.image_url,
        content: newBlog.content,
        likes: 0
      })
    })
    .then(res => res.json())
    .then(blogAdded => this.setState({
      blogs: [...this.state.blogs, blogAdded]
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


    // const filterBlogs = this.state.blogs.filter(blog => {
    //   return blog.attributes.title.toLowerCase().includes(
    //   this.state.searchField.toLocaleLowerCase()
    // )})
  

    return (
      <BrowserRouter>
      <div className="app">
        <div>
          <Header />
        </div>
        <div>
          <Nav />
        </div>

        {/* <BlogForm />

        <SearchBox 
        onSearchChange={this.onSearchChange} 
        sortBlogs = {this.sortBlogs}
        />
        <div>
        <BlogList blogs={filterBlogs} />
        <Commentlist comments={this.state.comments} />
        </div> */}
        <Route  path="/blogs/new" render={(routerProps) => <BlogForm {...routerProps} createBlog={this.createBlog} /> }/>
        <Route exact path="/blogs" render={(routerProps) => <SearchBox onSearchChange={this.onSearchChange} sortBlogs = {this.sortBlogs}/>} />
        <Route exact path="/blogs" render={(routerProps) => <BlogList {...routerProps} blogs={this.state.blogs} />} />
        <Route path="/blogs/:id"  component={BlogCard}  />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;



