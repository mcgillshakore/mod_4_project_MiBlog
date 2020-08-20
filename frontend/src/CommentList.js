import React from "react";
import BlogCard from "./BlogCard";

class CommentList extends React.Component {
  render() {
 
    return (
      <div className="blog-list">
        {
             this.props.comments.map(comment => <BlogCard x ={comment} key={comment.id} />)
        }
      </div>
    );
  }
}

export default CommentList;