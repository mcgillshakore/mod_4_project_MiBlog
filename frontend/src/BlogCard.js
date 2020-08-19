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

  render() {   

    if (this.props.blog === undefined){ return (<h1>{}</h1>)}

    return (
      <div className="card">
          <img  onClick={this.handleShowDialog}  className = "image" src={this.props.blog.image_url} alt={this.props.blog.name}></img>
        {this.state.isOpen && (
          <dialog
            className="dialog"
            style={{ position: 'absolute', left:'50%', width: '100%'}}
            open
            onClick={this.handleShowDialog}
          >
            <img
              className="image"
              src={this.props.blog.image_url}
              onClick={this.handleShowDialog}
              alt={this.props.blog.title}
            />
                 <h3>{this.props.blog.title}</h3>
                 <p>{this.props.blog.content}</p>
          </dialog>
        )} 
        
        <h3>{this.props.blog.title}</h3>
        <p>{this.props.blog.content}</p>
        <p>{this.props.a}</p>
  
        {/* <button>Mark as read</button> <span></span>
        <button>Like</button> <br></br> <br></br> */}
        <textarea rows="4" cols="50" name="comment" form="usrform">
         Enter text here...</textarea>
      </div>
    );
  }
}

export default BlogCard;