import React from 'react'
class BlogCard extends React.Component {

  state ={
    isOpen: false
  }

  handleShowDialog = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  handleDelete = () => {
    this.props.deleteBlog(this.props.blog)
  }

  render() {   
     

  if (this.props.blog === undefined) {return (<h1>{}</h1>)}

    return (
      <div className="card">
          <img  onClick={this.handleShowDialog}  className = "image" src={this.props.blog.attributes.image_url} alt={this.props.blog.attributes.name}></img>
        {this.state.isOpen && (
          <dialog
            className="dialog"
            // style={{ position:  }}
            open
            onClick={this.handleShowDialog}
          >
            <img
              className="image"
              src={this.props.blog.attributes.image_url}
              onClick={this.handleShowDialog}
              alt={this.props.blog.attributes.title}
            />
                 <h3>{this.props.blog.attributes.title}</h3>
                 <p>{this.props.blog.attributes.content}</p>
          </dialog>
        )} 
        
        <h3 className="title" >{this.props.blog.attributes.title}</h3>
        <p>{this.props.blog.attributes.content}</p>      
         <button className="delete" onClick={this.handleDelete} >DELETE</button>
      </div>
    );
  }
}

export default BlogCard;