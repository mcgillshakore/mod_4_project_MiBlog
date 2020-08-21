import React, {useState} from 'react';

export function Login(props){

    const [ user, changeUser ] = useState({
        username: '',
        password: ''
    })

    async function handleSubmit(e){
        e.preventDefault()
        console.log('login');
        let response = await fetch('http://localhost:3000/login', {
            credentials: 'include',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: user.username,
                password: user.password
            })
        })
        let {success} = await response.json()
        if(success){
            props.history.push(`/blogs`)
        }else{
            console.log('Not logged in');
        }
    }

    return(
        <form className="add-user-form" onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div>
                <label>Username</label>
                <span> </span>
                <input type="text" value={user.username} onChange={ e => changeUser({ ...user, username: e.target.value })} placeholder="Enter Username..." className="user-form-text"/>
                <br></br>
                <br></br>
                <label>Password</label>
                <span> </span>
                <input type="password" value={user.password} onChange={ e => changeUser({ ...user, password: e.target.value })} placeholder="Enter Password..." className="user-form-text"/>
            </div>
            <br></br>
            <input type="submit" value="Login" className="user-form-submit"/>
        </form>
    )
}

export default Login