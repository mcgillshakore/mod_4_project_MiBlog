import React from 'react'
import Card from "react-bootstrap/Card"

class BlogCard extends React.Component {
  

render () {
    return(
      
          <div className="card" >
  <img className="card-img-top" src={this.props.blog.image_url} alt={this.props.blog.name} />
  <div className="card-body">
    <h3 className="card-title">{this.props.blog.title}</h3>
    <p className="card-text"> {this.props.blog.content} </p>
    <button className="btn btn-primary">Read</button>
  </div>
       
      </div>
    )
   }


}
export default BlogCard