$(function() {
    $(document).on("click", ".rotate-image", () => {
        let res = $.get("/admin/orders/" + $(this).data("id") + "/rotate");
        if (res.status == 200) {
            let img = $(el)
                .closest("tr")
                .find(
                    "img[src=https://kinder.gpucloud.ru" +
                        res.responseText +
                        "]"
                );
            img.attr(
                "src",
                img.attr("src").split("?")[0] + "?" + Math.random()
            );
        }
    });
});
