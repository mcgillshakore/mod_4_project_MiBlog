import React from 'react';
import { Switch, Route } from "react-router-dom";
import BlogForm from './BlogForm'
import SearchBox from './SearchBox'
import BlogList from './BlogList'
import Header from './Header'

import Commentlist from './CommentList'
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Route, Switch} from 'react-router-dom'


 import './App.css';

import BlogCard from './BlogCard';
 const url = 'http://localhost:3000/blogs'

class App extends React.Component{

  
  state = {
    blogs: [],
    comments: [], 
    searchField: ''
  }

  fetchBlogs = () => {
    fetch(blogUrl)
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

  // addBlog = (blog) => {
  //   fetch(url, {
  //     method: 'POST',
  //     headers: {'Content-type': "application/json"},
  //     body: JSON.stringify({
  //       title: blog.name,
  //       image: blog.image,
  //       content: blog.content,
  //       Likes: 0
  //     })
  //   }).then(resp => resp.json())
  //     .then(blog => console.log(blog))
  // }

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



