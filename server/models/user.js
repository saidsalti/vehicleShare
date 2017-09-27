var mongoose = require('mongoose');
var mongooseuniquevalidator = require('mongoose-unique-validator');
var schema= mongoose.Schema;

var userSchema = new schema({
firstName:{type:String},

secondName:{type:String,required:[true,"requer Second Name"]},
lastName:{type:String,required:true},

email:{type:String,required:[true,"Email is required!!"]},
gender:{type:Number, required:true}

});
mongoose.plugin(mongooseuniquevalidator);


var User = mongoose.model('User',userSchema);
module.exports = User;

