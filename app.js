window.onload = function () {

  var firstDiv = document.getElementById('greeting');
  firstDiv.innerHTML = "Hello, World";

  var allListItems = document.getElementsByTagName('li');
  allListItems[0].style.backgroundColor = "yellow";
  allListItems[1].style.backgroundColor = "yellow";
  allListItems[2].style.backgroundColor = "yellow";
  allListItems[3].style.backgroundColor = "yellow";
  allListItems[4].style.backgroundColor = "yellow";

  var img = document.createElement('img');
  firstDiv.appendChild(img);
  img.src = "http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif";


  allListItems[0].addEventListener("click", selected0);
  allListItems[1].addEventListener("click", selected1);
  allListItems[2].addEventListener("click", selected2); 
  allListItems[3].addEventListener("click", selected3); 
  allListItems[4].addEventListener("click", selected4); 

  function selected0() {  
    this.className = "selected";
    allListItems[1].className = "";
    allListItems[2].className = "";
    allListItems[3].className = "";
    allListItems[4].className = "";
    var milk = document.querySelectorAll("img")[1];
    milk.src = "./images/milk.jpeg";
  }

  function selected1() {
    this.className = "selected";
    allListItems[0].className = "";
    allListItems[2].className = "";
    allListItems[3].className = "";
    allListItems[4].className = "";
    var honey = document.querySelectorAll("img")[1];
    honey.src = "./images/honey.jpeg";
  }

  function selected2() {
    this.className = "selected";
    allListItems[0].className = "";
    allListItems[1].className = "";
    allListItems[3].className = "";
    allListItems[4].className = "";
    var water = document.querySelectorAll("img")[1];
    water.src = "./images/water.jpeg";
  }

  function selected3() {
    this.className = "selected";
    allListItems[0].className = "";
    allListItems[1].className = "";
    allListItems[2].className = "";
    allListItems[4].className = "";
    var wine = document.querySelectorAll("img")[1];
    wine.src = "./images/wine.jpeg";
  }

  function selected4() {
    this.className = "selected";
    allListItems[0].className = "";
    allListItems[1].className = "";
    allListItems[2].className = "";
    allListItems[3].className = "";
    var beer = document.querySelectorAll("img")[1]; 
    beer.src = "./images/beer.jpeg";
  }

  var ghost = document.getElementById("ghosting");
    ghost.addEventListener("mouseover", remove);
  function remove() {
    ghost.remove();
  }

  var resize = document.getElementById("resize");
  resize.addEventListener("mouseover", double);
  function double() {
    resize.style.width = '400px';
    resize.addEventListener("mouseover", resetW);
  }

  function resetW() {
    resize.style.width = '200px';
  }

  var resetButton = document.getElementById("reset");
  resetButton.addEventListener("click", resetB);

  function resetB() {
    allListItems[0].className = "";
    allListItems[1].className = "";
    allListItems[2].className = "";
    allListItems[3].className = "";
    allListItems[4].className = "";
    var reset = document.querySelectorAll("img")[1];
    reset.src = "./images/panic.jpeg";
  }
};











