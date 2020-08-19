import React from 'react'
class BlogForm extends React.Component {
  
    handleSubmit = (event) => {
        event.preventDefault()
        let form = event.currentTarget
        console.log(event.target.title.value)
        let blog = ({
          title: event.target.title.value,
          image: event.target.image.value,
          content: event.target.content.value
        })
        this.props.addBlog(blog)
        form.reset()
      }
    render () {
        return(
            <div>
                <form className="add-blog-form" onSubmit={this.handleSubmit}>
                    <h2>Create A New Blog</h2>
                    <label>
                        Title<br/><br/>
                        <input type="text" name="title" placeholder="Enter a Blog's Title..." className="blog-form-text"/>
                    </label><br/><br/>
                    <label>
                        Image<br/><br/>
                         <input type="text" name="image" placeholder="Enter a Image URL..." className="blog-form-text"/>
                    </label><br/><br/>
                    <label>
                        Blog<br/><br/>
                        <textarea  name="content" placeholder="Write your Blog..." className="blog-form-text"/>
                    </label><br/><br/>
                        <input type="submit" value="Create Blog" className="blog-form-submit"/>
                </form>
            </div>
        )
    }
}
export default BlogForm
















