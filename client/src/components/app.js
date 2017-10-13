import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux'

import Nav from './nav';
import Home from './home';
import Chat_Lobby from './chat-lobby';
import { get_user } from './actions'

class  App extends Component {
    componentDidMount(){
        this.props.get_user();
    }

    render() {
        return (
            <div className='container'>
                <Nav/>
                <Route path='/' component={Home}/>
                <Route path='/chat-lobby' component={Chat_Lobby}/>
            </div>
        )
    }
};


export default connect(null, { get_user })(App);
