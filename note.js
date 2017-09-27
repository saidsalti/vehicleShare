// module.exports = function appuser() {
//     this.user = {
//         firstName: "said",
//         lastName: "Alsalti",
//         fullName: function() {
//             return firstName + " " + lastName;
//         }
//     }
//     return user;
// }

const fs = require('fs');
var addNote = (title, body) => {
    var notes = [];
    var note = {
        title,
        body
    };

    var notesString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(notesString);
    notes.push(note);

    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

var getAll = () => {
    console.log('Geting all note');
}
module.exports = {
    addNote,
    getAll

}