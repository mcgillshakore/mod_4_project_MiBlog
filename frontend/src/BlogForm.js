import React from 'react'
import {Link} from 'react-router-dom'
class BlogForm extends React.Component {

    state = {
        title: '',
        image_url: '',
        content: '',
        likes: 0
    }

    handleChange = (e) => {
      
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick = (e) => {
     
        this.props.createBlog(this.state)
        this.setState({
            title: '',
            image_url: '',
            content: ''
        })
        // this.props.history.push("/blogs")
    }
  
   
     
   

    render () {
        console.log(this.props.history)
        return(
            <div>
                <form className="add-blog-form" onSubmit={(e) =>{ this.handleSubmit(e)
            
                }
                }>
                    <h2>Create A New Blog</h2>
                    <label>
                        Title<br/><br/>
                        <input type="text" onChange={this.handleChange}  name="title" placeholder="Enter a Blog's Title..." className="blog-form-text"/>
                    </label><br/><br/>
                    <label>
                        Image<br/><br/>
                         <input type="text" onChange={this.handleChange}  name="image_url" placeholder="Enter a Image URL..." className="blog-form-text"/>
                    </label><br/><br/>
                    <label>
                        Content<br/><br/>
                        <textarea  name="content" onChange = {this.handleChange}  placeholder="Write your Blog..." className="blog-form-text"/>
                    </label><br/><br/>
                        <input type="submit" onClick={this.handleClick} value="Create Blog" className="blog-form-submit"/>
                </form>
                <br/>
                <div className="link2" >
                <Link to="/blogs" >Go To Main Page</Link>
                </div>
              

            </div>
        )
    }
}
export default BlogForm
















