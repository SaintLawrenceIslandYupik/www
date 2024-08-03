function myFunction(element, color) {
  element.style.color = color;
}

function myHide() {
  
  for (const tag of ["tei-pb", "tei-graphic", "tei-p", "tei-list"]) {
    //const tag="tei-pb";
    const allParas = document.getElementsByTagName(tag);
    
    const num = allParas.length;
    //alert(`There are ${num} ${tag} tags in this document`);
    
    //allParas.forEach(function(element) {
    for (const x of allParas) {
      //alert(`In for-each`);
      //element.style.visibility = 'hidden';
      if (x.nodeName === "BUTTON") {
        alert(`Button`);
      } else {
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }
    }
  }
  //});
  /*
          
  var x = document.getElementById("title");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
   */
}
