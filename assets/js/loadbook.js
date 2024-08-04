let c = new CETEI();
let behaviors = {
  "tei": {
    "head": function(e) {
      let level = document.evaluate("count(ancestor::tei-div)", e, null, XPathResult.NUMBER_TYPE, null);
      let result = document.createElement("h" + (level.numberValue>7 ? 7 : level.numberValue));
      for (let n of Array.from(e.childNodes)) {
        result.appendChild(n.cloneNode());
      }
      return result;
    },
    "title": [
      ["tei-titlestmt>tei-title", function(elt) {
        const existingTitleTags = document.getElementsByTagName("title");
        if (existingTitleTags.length < 1) {
          let title = document.createElement("title");
          title.innerHTML = elt.innerText;
          document.querySelector("head").appendChild(title);
        } /*else {
          existingTitleTags[0].innerHTML += ", " + elt.innerText;
        }*/
      }]
    ],
    //"titlePage": ["<div class=\"titlePage\">", "</div>"],
    "titlePart": function(e) {
      let h1 = document.createElement("h1");
      h1.innerHTML = e.innerHTML;
      return h1;
    },
    "lb": ["<br>"],
    /* Insert a <p> with the content of the <pb>'s @n attribute inside it
       Add a line above with CSS */
    "pb": ["<p class=\"break\">$@n</p>"],
    /*"graphic": ["<br>"],*/
  }
};
c.addBehaviors(behaviors);
c.getHTML5('assets/tei/demo.xml', function(data){
  document.getElementsByClassName('bookContent')[0].appendChild(data);
//  document.getElementsByTagName('body')[0].appendChild(data);
});


/*
  for (const tagName of ["tei-div"]) {
    
    const elements = document.getElementsByTagName(tag);
    alert(`finally`);
    for (const element of elements) {
      if (x.style.display === "") {
        alert("Set to none");
        x.style.display = "none";
      }
    }
  }
  */
