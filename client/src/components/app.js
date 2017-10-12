import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { Route } from 'react-router-dom';

import Nav from './nav';
import Home from './home';
import Chat_Lobby from './chat-lobby';

const App = () => (
    <div className='container'>
        <Nav/>
        <Route path='/' component={Home}/>
        <Route path='/chat-lobby' component={Chat_Lobby}/>
    </div>
);

export default App;
