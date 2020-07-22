// DOM manipulation
// console.log(document.getElementById("title"));
// console.log(document instanceof HTMLDocument);

document.addEventListener("DOMContentLoaded", 
  function(event){

function sayHello(){
  console.log(event);
  this.textContent = "SAID IT!"
  var name = 
  document.getElementById("name").value;
  var message = "<h2> Hello " + name + "!<h2>";

  document.getElementById("content")
  // .textContent = message;
    .innerHTML = message;

  if(name ==="student"){
    var title = 
      document
        //.getElementById("title")
        .querySelector("#title")
        .textContent;
    title += " & loving it!"
    document
      //.querySelector("#title")
      .querySelector("h1")
      .textContent = title;
    }
}

  document.querySelector("button")
    .addEventListener("click", sayHello);

  document.querySelector("body")
    .addEventListener("mousemove", 
      function(event){
        if(event.shiftKey){
        console.log("x: " + event.clientX);
        console.log("y: " + event.clientY);
        }
      }
    );

// document.querySelector("button")
//   .onclick = sayHello;
    
  }
);


/*
function sayHello () {
  var name =
   document.getElementById("name").value;
   var message = "<h2>Hello " + name + "!</h2>";

  // document
  //   .getElementById("content")
  //   .textContent = message;

  document
    .getElementById("content")
    .innerHTML = message;

  if (name === "student") {
    var title = 
      document
        .querySelector("#title")
        .textContent;
    title += " & Lovin' it!";
    document
        .querySelector("h1")
        .textContent = title;
  }
}

console.log(document.getElementById("title"));
console.log(document instanceof HTMLDocument)*/