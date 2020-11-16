"use strict";

$(function () {
  var _this = this;

  $(".rotate-image").on("click", function (e) {
    e.preventDefault();
    $(_this).data("id");
    console.log($.get("/admin/orders/" + rotator.dataset.id + "/rotate"));
  });
});