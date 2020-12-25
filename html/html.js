let menuOpen = 0;
function overmenu(x) {
  x.style.backgroundColor = "black";
  console.log(x)
}

function outmenu(x) {
  x.style.backgroundColor = "teal";
}

function openmenu(x) {
  document.getElementById("console").style.transition = "0.7s";
  if(menuOpen == 0) {
    document.getElementById("console").style.left = "200px";
    menuOpen = 1;
  }
  else {
    document.getElementById("console").style.left = "0px";
    menuOpen = 0;
  }
}
