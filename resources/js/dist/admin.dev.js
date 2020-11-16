"use strict";

$(function () {
  $(".rotate-image").on("click", function (e) {
    e.preventDefault();
    console.log($.get("/admin/orders/" + $(e.target).data("id") + "/rotate"));
  });
});