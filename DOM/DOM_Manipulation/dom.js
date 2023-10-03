// Element <head> - Element<h1> - Text "Title"
// Element <Body> - Element <input> - Attribute "type", Attribute "name"
// Element <input> - Attribute "button", Attribute "value"- Text "Submit"
// Examine the document object
// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// console.log(document.forms);
// console.log(document.links);

// console.log(document.images);
var headerTitle = document.getElementById("header-title");
var header = document.getElementById("main-header");
// console.log(headerTitle);
// console.log(headerTitle.textContent);
// console.log(headerTitle.innerText);
// headerTitle.style.borderBottom = "solid 3px black";
header.style.border = "solid 3px black";

var items = document.getElementsByClassName("title");
items[0].style.color="Green";
items[0].style.fontWeight = "bold";

