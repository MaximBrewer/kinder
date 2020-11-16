"use strict";

$(function () {
  var _this = this;

  $(".rotate-image").click(function (e) {
    e.stopPropagation();
    console.log(e.target, _this);
    var res = $.get("/admin/orders/" + $(_this).data("id") + "/rotate");

    if (res.status == 200) {
      var img = $(el).closest("tr").find("img[src=https://kinder.gpucloud.ru" + res.responseText + "]");
      img.attr("src", img.attr("src").split("?")[0] + "?" + Math.random());
    }
  });
});