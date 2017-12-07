// to be queried by class name
classNames = {
  "fromInListView": "yP",
  
}

// (nested elements) to be queried by querySelector
nestedClassNames = {
  "emailListBody" : ".UI table .tbody",
}
// yP is the class for each "from" header in the email table 
el = document.getElementsByClassName("yP")




for (var i = 0, len = el.length; i < len; i++) {
  el[i].style.fontWeight = "bold";
}