"use strict";

$(function () {
  var rotators = Object.values(document.getElementsByClassName("rotate-image"));
  rotators.forEach(function (rotator) {
    rotator.addEventListener("click", function (event) {
      event.preventDefault();
      var el;
      if (event.target.dataset.id) el = event.target;else {
        el = $(event.target).parent();
      }
      var res = $.get("/admin/orders/" + $(el).data("id") + "/rotate");

      if (res.status == 200) {
        var img = $(el).parent().parent().find("img");
        img.attr("src", img.attr("src").split("?")[0] + "?" + Math.random());
      }
    });
  });
});