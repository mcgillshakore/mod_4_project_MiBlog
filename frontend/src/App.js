import React from 'react';
import BlogForm from './BlogForm'
import SearchBox from './SearchBox'
import BlogList from './BlogList'
import "bootstrap/dist/css/bootstrap.min.css";

 import './App.css';

class App extends React.Component{

  state ={
    blogs: []
  }

  componentDidMount () {
    fetch('http://localhost:3000/blogs')
    .then(res => res.json())
    .then( blogs => this.setState({
      blogs: blogs
    }))
  }

  render() {
    return (
      <div className="App">
   <BlogForm />
        <SearchBox />
        <BlogList  blogs={this.state.blogs} />
      
     
      </div>
    );
  }
}

export default App;



