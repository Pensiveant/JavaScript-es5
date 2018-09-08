import _ from "lodash";


//向文档中加入一个div，内容为hello webpack
function component() {
    var element=document.createElement("div");
    element.innerHTML=_.join(["hello","webpack"]," ");
    return element;
}

document.body.appendChild(component());
connole.error("test");