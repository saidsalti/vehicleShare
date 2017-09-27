var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/vsharedb');
//mongoose.connect('mongodb://localhost:27017/vsharedb');

module.exports = { mongoose };