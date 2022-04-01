const prompt = require('prompt-sync')();

var names = ["David", "Cynthia", "Raymond", "Clayton", "Jennifer"];
var name = prompt("Enter a name to search for: ")
var position = names.indexOf(name);
if (position >= 0) {
 console.log("Found " + name + " at position " + position);
}
else {
 console.log(name + " not found in array.");
}