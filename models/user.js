const mongoose = require('mongoose');
const { Schema } = mongoose;

const user_schema = new Schema({
    facebook_id: String
});

mongoose.model('users', user_schema);

