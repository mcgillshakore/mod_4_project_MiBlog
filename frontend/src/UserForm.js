import React from 'react'
import {Link} from 'react-router-dom'
import Nav from './Nav'
class UserForm extends React.Component {

    state = {
        username: '',
        password: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick = (e) => {
        this.props.createUser(this.state)
        this.setState({
            username: '',
            password: '',
        })
    }
  
    render () {

        return(
            <div>
                <Nav/>
                <form className="add-user-form" onSubmit={(e) =>{ this.handleSubmit(e)}}>
                    <h2>Create An Account</h2>
                    <label>
                        UserName<br/><br/>
                        <input type="text" onChange={this.handleChange}  name="username" placeholder="Create Username..." className="user-form-text"/>
                    </label><br/><br/>
                    <label>
                        Password<br/><br/>
                         <input type="text" onChange={this.handleChange}  name="password" placeholder="Create Password..." className="user-form-text"/>
                    </label><br/><br/>
                        <input type="submit" onClick={this.handleClick} value="Create Account" className="user-form-submit"/>
                </form>
                <br/>
            </div>
        )
    }
}
export default UserForm
















