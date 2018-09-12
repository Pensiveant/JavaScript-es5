// var type = require("./type/typeof");
// var createSingleObject = require("./object/createSingleObject.js");
// require("./object/objectAttributeOprate");
//  require("./object/objectAttribute");
// require("./function/closures");
// require("./string/stringOporate");
require("./array/arrayOporate");

var p = document.createElement("p");
p.innerHTML = "hello es5!";
var rootDivEle = document.getElementById("root");
rootDivEle.appendChild(p);