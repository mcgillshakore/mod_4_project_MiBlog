import React from "react";
import BlogCard from "./BlogCard";
import Nav from './Nav'
import SearchBox from './SearchBox'

class BlogList extends React.Component {

  render() {
    return (
      <div>     
        <Nav/>
        <SearchBox onSearchChange={this.props.onSearchChange}   sortBlogs = {this.props.sortBlogs}/>
      <div className="blog-list">
        {
          this.props.blogs.map( blog => <BlogCard  
            blog={blog} 
            key={blog.id}
            deleteBlog = {this.props.deleteBlog} />)
        }
      </div>

      </div>
    );
  }
}
export default BlogList;