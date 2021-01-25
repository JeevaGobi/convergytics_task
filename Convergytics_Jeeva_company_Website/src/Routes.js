import React from 'react';
import { Route, Switch }  from 'react-router-dom';
import Home from './components/home/';
import About from './components/about/';
import Blog from './components/blog/';
import Contact from './components/contact/';
import Login from './components/core/Login';
import Register from './components/core/Register';
import ResetPassword from './components/core/ForgotPassword';
import NotFound from './components/404';

export default () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/blog" component={Blog} />
        <Route path="/login" component={Login} />
        <Route component={NotFound} />
    </Switch>
);
