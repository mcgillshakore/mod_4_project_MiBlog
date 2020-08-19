import React from 'react'


class BlogCard extends React.Component {
  render() {
  
    
  if (this.props.blog === undefined){ return (<h1>{}</h1>)}

return (
      <div>
          <img className = "image" src={this.props.blog.image_url} alt={this.props.blog.name}></img>
        <h3>{this.props.blog.title}</h3>
        <p>{this.props.blog.content}</p>
<p>{this.props.a}</p>
  
        <button>Mark as read</button> <span></span>
        <button>Like</button> <br></br> <br></br>
        <textarea rows="4" cols="50" name="comment" form="usrform">
         Enter text here...</textarea>
      </div>
    );
  }
}

export default BlogCard;