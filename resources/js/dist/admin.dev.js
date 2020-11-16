"use strict";

$(function () {
  $(".rotate-image").on("click", function (e) {
    e.preventDefault();
    var el = e.target;
    var res = $.get("/admin/orders/" + $(el).data("id") + "/rotate");

    if (res.status == 200) {
      var img = $(el).closest('tr').find('img[src=https://kinder.gpucloud.ru' + res.responseText + ']');
      img.attr('src', img.attr("src").split("?")[0] + "?" + Math.random());
    }
  });
});