"use strict";

var rotators = Object.values(document.getElementsByClassName("rotate-image"));
rotators.forEach(function (rotator) {
  rotator.addEventListener("click", function (event) {
    event.preventDefault();
    var request = new XMLHttpRequest();
    var url = "/admin/orders/" + rotator.dataset.id + "/rotate";
    request.responseType = "json";
    request.open("GET", url, true);
    request.addEventListener("readystatechange", function () {
      if (request.readyState === 4 && request.status === 200) {
        var obj = request.response;
        var arr = obj.results;
      }
    });
    request.send();
  });
});