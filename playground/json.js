// var obj = {
//     name: 'Said'
// };
// var stringobj = JSON.stringify(obj);
// console.log(typeof stringobj);
// console.log(stringobj);

// var personString = '{"name":"Said","age":35}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

const fs = require('fs');
var originalNote = {
    title: "title of note",
    body: 'Some body'
};
//originolnotestring
var originolnotestring = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originolnotestring);

var noteString = fs.readFileSync('notes.json');
//note
var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);