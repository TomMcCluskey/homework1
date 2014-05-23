//Objects


/*
var genericGreet = function() {
    return "Hello, my name is " + this.name;
};

var andrew = {
    name: "Andrew",
    greet: genericGreet
}

var ryan = {
    name: "Ryan",
    greet: genericGreet
}
*/

function catNames(paragraph) {
  return paragraph.slice(indexOf(":")).split(",")
}