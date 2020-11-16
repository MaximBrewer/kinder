"use strict";

$(function () {
  var _this = this;

  $(".rotate-image").on("click", function (e) {
    e.preventDefault();
    console.log($.get("/admin/orders/" + $(_this).data("id") + "/rotate"));
  });
});