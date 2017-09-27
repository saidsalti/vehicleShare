var lodash = require('lodash');

var note = require('./note');
const yargs = require("yargs");
var para = yargs.argv;


var comand = process.argv[2];
console.log('the para is ' + comand);

note.addNote(para.title, para.body);