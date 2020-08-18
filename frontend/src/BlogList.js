import React from 'react'
import BlogCard from './BlogCard'

class BlogList extends React.Component {
render () {
    return(
        <div className="blog-List">
            {this.props.blogs.map(blog => <BlogCard blog={blog } key={blog.id} /> )}
         
        </div>
    )
}
}
export default BlogList