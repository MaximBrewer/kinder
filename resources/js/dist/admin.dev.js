"use strict";

var rotators = Object.values(document.getElementsByClassName("rotate-image"));
rotators.forEach(function (rotator) {
  rotator.addEventListener(function (event) {
    event.preventDefault();
    console.log(event.target.dataset.id);
  });
});