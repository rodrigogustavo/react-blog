import React, { Component } from 'react';
//import axios from 'axios';
import {Route, NavLink, Switch} from 'react-router-dom';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost'

import './Blog.css';

class Blog extends Component {

    render () {
        return (
            <div className='Blog'>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to='/posts/' activeClassName='active' exact> Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post'
                            }}> New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path='/new-post' component={NewPost}/>
                    <Route path='/posts' component={Posts}/>
                    <Route path='/' component={Posts}/>
                </Switch>
            </div>
        );
    }
}

export default Blog;