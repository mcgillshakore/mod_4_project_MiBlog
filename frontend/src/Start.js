import React from 'react'
import  {BrowserRouter, Route, Switch} from 'react-router-dom'
import App from './App'

function Start (props) {
    console.log(props.history)
    return (

        <div>
            <BrowserRouter> 
            <Switch>
                <App history={props.history} />
            </Switch>
             </BrowserRouter>
            
        </div>
    )
}
export default Start