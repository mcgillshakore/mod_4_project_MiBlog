import React from 'react';
import BlogForm from './BlogForm'
import SearchBox from './SearchBox'
import BlogList from './BlogList'

// import './App.css';

class App extends React.Component{

  render() {
    return (
      <div className="App">
        <SearchBox />
        <BlogList />
        <BlogForm />
       <p>holla</p>
      </div>
    );
  }
}

export default App;



