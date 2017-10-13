const express = require('express');
const mongoose = require('mongoose');
const cookie_session = require('cookie-session');
const passport = require('passport');
const body_parser = require('body-parser');
const io = require('socket.io');
const http = require('http').Server();

const keys = require('./config/keys');


require('./models/user');
require('./services/passport');

const app = express();

mongoose.connect(keys.mongo_db, {
    useMongoClient: true
});

app.use(body_parser.json());
app.use(
    cookie_session({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookie_key]
    })
)

app.use(passport.initialize());
app.use(passport.session())


const PORT = process.env.PORT || 5000;

require('./routes/auth_routes')(app)



app.listen(PORT, () => {
    console.log('we be listening on Port: ' + PORT )
})