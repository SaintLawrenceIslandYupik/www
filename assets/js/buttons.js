function myFunction(element, color) {
  element.style.color = color;
}

function startBook() {
  for (const tag of ["tei-titlePage", "tei-div"]) {
    //const tag="tei-pb";
    const allParas = document.getElementsByTagName(tag);
    
    for (const div of allParas) {
      //if (div.style.display === "") {
        div.style.display = "none";
      //}
    }
    
  }
  
  for (const tag of ["tei-titlePage"]) {
    //const tag="tei-pb";
    const allParas = document.getElementsByTagName(tag);
    
    for (const div of allParas) {
      if (div.style.display === "none") {
        div.style.display = "block";
      }
    }
    
  }
  
  
}

function prevPage() {
  
  let foundCurrentPage = false;
  //alert("prev");
  for (const tag of ["tei-div"]) {
    //const tag="tei-pb";
    const allDivs = document.getElementsByTagName(tag);
    
    const num = allDivs.length;
    //alert(`There are ${num} ${tag} tags in this document`);
    
    for (let i=num-1; i >= 0; i-=1) {
      
      if (allDivs[i].style.display === "block") {
        //alert(`Hiding ${x.innerText}`);
        foundCurrentPage = true;
        allDivs[i].style.display = "none";
        
      } else if (foundCurrentPage) {
        
        if (allDivs[i].style.display === "none") {
          allDivs[i].style.display = "block";
          //alert(`Showing ${x.innerText}`);
          return;
        }
      }
      
    }
  }
    
    for (const tag of ["tei-titlePage"]) {
      //const tag="tei-pb";
      const allParas = document.getElementsByTagName(tag);
      
      for (const div of allParas) {
        if (div.style.display === "none") {
          div.style.display = "block";
        }
      }
      
    }
  
}

function nextPage() {
  let foundCurrentPage = false;
  
  const allTitle = document.getElementsByTagName("tei-titlePage");
  for (let i=0; i < allTitle.length; i+=1) {
    if (allTitle[i].style.display === "block") {
        //alert(`Hiding ${x.innerText}`);
        foundCurrentPage = true;
        allTitle[i].style.display = "none";
      
      } else if (foundCurrentPage) {
        
        if (allTitle[i].style.display === "none") {
          allTitle[i].style.display = "block";
          /*
          x.addEventListener('click', (event) => {   // Do something when a swipe event occurs });
            myHide();
          });
          x.addEventListener('dblclick', (event) => {   // Do something when a swipe event occurs });
            alert("double click");
          });
           */
          //alert(`Showing ${x.innerText}`);
          return;
        }
      }
    //}
  }
  
  
  for (const tag of ["tei-div"]) {
    //const tag="tei-pb";
    const allDivs = document.getElementsByTagName(tag);
    
    const num = allDivs.length;
    //alert(`There are ${num} ${tag} tags in this document`);

    
    //allParas.forEach(function(element) {
    //const num = allDivs.length;
    //alert(`There are ${num} ${tag} tags in this document`);
    
    for (let i=0; i < num; i+=1) {
      
      //let x = allDivs[i];
      //alert(i);
      //element.style.visibility = 'hidden';
      //if (x.nodeName === "BUTTON") {
        //`alert(x.innerText);
      //} else {
      
      
      //alert(`'${x.style.display}'`);
      //break;
      
      if (allDivs[i].style.display === "block") {
          //alert(`Hiding ${x.innerText}`);
          foundCurrentPage = true;
        if (i+1 < num) {
          allDivs[i].style.display = "none";
        }
        
        } else if (foundCurrentPage) {
          
          if (allDivs[i].style.display === "none") {
            allDivs[i].style.display = "block";
            /*
            x.addEventListener('click', (event) => {   // Do something when a swipe event occurs });
              myHide();
            });
            x.addEventListener('dblclick', (event) => {   // Do something when a swipe event occurs });
              alert("double click");
            });
             */
            //alert(`Showing ${x.innerText}`);
            return;
          }
        }
      //}
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
