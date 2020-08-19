import React from 'react'

class SearchBox extends React.Component {
render () {
    return(
        <div className="searchbar" >
           <input
           onChange={this.props.onSearchChange}
           className="search"
           type="search"
           placeholder="search blogs"
           /> <span></span>

           <select onChange={(e) => this.props.sortBlogs(e.target.value)}  name="select-blogs" id="selection">
           <option value="none">----</option>
           <option value="alphabetic">Alphabetic</option>
        
           </select>


        </div>
    )
}
}
export default SearchBox