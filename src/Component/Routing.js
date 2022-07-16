import React from'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Home/Home';
import Header from './Header';
import Footer from './footer';
import Login from './login/login';
import Register from './login/register'
const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
                <Route exact path ="/" component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
            <Footer/>
        </BrowserRouter>
    )
}
export default Routing;