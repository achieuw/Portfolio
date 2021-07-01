/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
let navbar = document.getElementsByID("menu");

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos)
        document.getElementById("navbar").style.top = "0";
    else
        document.getElementById("navbar").style.top = "-60px";

        prevScrollpos = currentScrollPos;
}

navbar.addEventListener("mousedown", function( event ){
   alert("hi");
});
 

