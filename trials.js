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

// cdn link for external stylesheet
https://cdn.rawgit.com/Rabid-Dan/mailPlus/f14f8167/replacement-styles.css


for (var i = 0, len = el.length; i < len; i++) {
  el[i].style.fontWeight = "bold";
}

var script = document.createElement('link');
script.rel = 'stylesheet';
// the href below does not auto update so needs to be generated from https://rawgit.com/ after changes
script.href = 'https://cdn.rawgit.com/Rabid-Dan/mailPlus/119c4efd/replacement-styles.css';    

document.head.appendChild(script);