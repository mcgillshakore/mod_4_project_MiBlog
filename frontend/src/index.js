import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import BlogForm from './BlogForm'
import { BrowserRouter, Route} from 'react-router-dom';


ReactDOM.render(
<BrowserRouter>
  <Route path="/home" component={App}/>
  <Route path="/blog-form" exact component={BlogForm}/>
</BrowserRouter>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
