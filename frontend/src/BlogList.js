import React from "react";
import BlogCard from "./BlogCard";

class BlogList extends React.Component {
  render() {


    return (
      <div className="blog-list">
        {
          this.props.blogs.map( blog => <BlogCard  
            blog={blog} 
            key={blog.id}
            deleteBlog = {this.props.deleteBlog}
            />)
        }
      </div>
    );
  }
}

export default BlogList;