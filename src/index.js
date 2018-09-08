var createSingleObject = require("./object/createSingleObject.js");




var p = document.createElement("p");
p.innerHTML = "hello es5!";
var rootDivEle = document.getElementById("root");
rootDivEle.appendChild(p);