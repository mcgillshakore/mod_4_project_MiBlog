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
        console.log("click")
        e.preventDefault()
        this.props.createBlog(this.state)
        this.setState({
            title: '',
            image_url: '',
            content: ''
        })
    }
  
    // handleSubmit = (event) => {
    //     event.preventDefault()
    //     let form = event.currentTarget
    //     console.log(event.target.title.value)
    //     let blog = ({
    //       title: event.target.title.value,
    //       image: event.target.image.value,
    //       content: event.target.content.value
    //     })
    //     this.props.addBlog(blog)
    //     //form.reset()
    //   }
     
      handleLink = () => {
          this.props.history.push("/blogs")
      }

    render () {
        return(
            <div>
                <form className="add-blog-form" onSubmit={(e) =>{ this.handleSubmit(e)
                this.handleLink()
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
                <Link to="/blogs" >Go To Main Page</Link>

            </div>
        )
    }
}
export default BlogForm
















