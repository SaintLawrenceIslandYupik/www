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
    "lb": ["<br>"],
    /* Insert a <p> with the content of the <pb>'s @n attribute inside it
       Add a line above with CSS */
    "pb": ["<p class=\"break\">$@n</p>"],
    /*"graphic": ["<br>"],*/
  }
};
c.addBehaviors(behaviors);
c.getHTML5('assets/tei/demo.xml', function(data){
  document.getElementsByTagName('body')[0].appendChild(data);
});

