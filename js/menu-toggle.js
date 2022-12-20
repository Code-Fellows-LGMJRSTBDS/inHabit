//Get the button, and when the user clicks on it, execute myFunction

document.getElementById("nav-toggle").onclick = function() {toggleNav()};
/* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
function toggleNav() {
  document.getElementById("nav-items").classList.toggle("nav-toggle-show");
}