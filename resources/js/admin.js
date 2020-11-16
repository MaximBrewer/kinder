$(function() {
    $(".rotate-image").on("click", e => {
        e.preventDefault();
        let el = $(e.target);
        let res = $.get("/admin/orders/" + $(el).data("id") + "/rotate");
        if (res.status == 200) {
            let img = $(el).closest('tr').find('img[src=https://kinder.gpucloud.ru' + res.responseText + ']');
            img.attr('src', img.attr("src").split("?")[0] + "?" + Math.random())
        }
    });
});
