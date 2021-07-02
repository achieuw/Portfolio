let navbar = document.getElementById("navbar");
const activate = false;
const resetColor = true;

// This handler will be executed only once when the cursor
// moves over the unordered list
navbar.addEventListener("mouseenter", function( event ) {
  // highlight the mouseenter target
  event.target.style.color = "purple";

  // reset the color after a short delay
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);

// This handler will be executed every time the cursor
// is moved over a different list item
navbar.addEventListener("mouseover", function( event ) {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
  // highlight the mouseover target
  if(activate)
    event.target.style.color = "#" + randomColor;
}, false);

navbar.addEventListener("mouseout", function( event ) {
    // reset the color after a short delay
    setTimeout(function() {
        if(resetColor)
            event.target.style.color = "";
}, 0);
}, false);