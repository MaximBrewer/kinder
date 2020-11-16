"use strict";

var rotators = Object.values(document.getElementsByClassName("rotate-image"));
rotators.forEach(function (rotator) {
  rotator.addEventListener('click', function (event) {
    event.preventDefault();
    console.log(event.target.dataset.id);
  });
});