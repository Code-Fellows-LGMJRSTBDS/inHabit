'use strict';

// //Get the button, and when the user clicks on it, execute myFunction

// document.getElementById('nav-toggle').onclick = function() {toggleNav()};
// /* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
// function toggleNav() {
//   document.getElementById('nav-items').classList.toggle('nav-toggle-show');
// }


let theToggle = document.getElementById('toggle');

// based on Todd Motto functions
// https://toddmotto.com/labs/reusable-js/

// hasClass
function hasClass(elem, className) {
  return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}
// addClass
function addClass(elem, className) {
  if (!hasClass(elem, className)) {
    elem.className += ' ' + className;
  }
}
// removeClass
function removeClass(elem, className) {
  let newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
  if (hasClass(elem, className)) {
    while (newClass.indexOf(' ' + className + ' ') >= 0) {
      newClass = newClass.replace(' ' + className + ' ', ' ');
    }
    elem.className = newClass.replace(/^\s+|\s+$/g, '');
  }
}
// toggleClass
function toggleClass(elem, className) {
  let newClass = ' ' + elem.className.replace(/[\t\r\n]/g, " ") + ' ';
  if (hasClass(elem, className)) {
    while (newClass.indexOf(" " + className + " ") >= 0) {
      newClass = newClass.replace(" " + className + " ", " ");
    }
    elem.className = newClass.replace(/^\s+|\s+$/g, '');
  } else {
    elem.className += ' ' + className;
  }
}

theToggle.onclick = function () {
  toggleClass(this, 'on');
  return false;
};
