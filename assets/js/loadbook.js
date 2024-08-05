function loadBookFromXML(xmlFileName, imgPrefixes) {
  //alert("Loading book 1");
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
      "graphic": function(elt) {
        let content = new Image();
        //alert(elt.getAttribute("url"));
        content.src = elt.getAttribute("url");
        content.src = imgPrefixes[0] + "/" + elt.getAttribute("url"); //.replaceAll("/", "/"+imgPrefix+".webp"); //this.rw(elt.getAttribute("url"));
        //alert(content.src);
        content.srcset = imgPrefixes[0] + "/" + elt.getAttribute("url") + " 185w , " + imgPrefixes[1] + "/" + elt.getAttribute("url") + " 738w";
        content.sizes="(max-width: 600px) 200px, 750px";
        if (elt.hasAttribute("width")) {
          content.setAttribute("width",elt.getAttribute("width"));
        }
        if (elt.hasAttribute("height")) {
          content.setAttribute("height",elt.getAttribute("height"));
        }
        return content;
      },
    }
  };
  c.addBehaviors(behaviors);
  //c.getHTML5('assets/tei/demo.xml', function(data){
  c.getHTML5(xmlFileName, function(data){
    document.getElementsByClassName('bookContent')[0].appendChild(data);
    //  document.getElementsByTagName('body')[0].appendChild(data);
  });
  
}


loadBookFromXML("book.xml", ["img/25", "img/100"]);

