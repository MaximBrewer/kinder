$(function() {
    const rotators = Object.values(
        document.getElementsByClassName("rotate-image")
    );
    rotators.forEach(rotator => {
        rotator.addEventListener("click", event => {
            event.preventDefault();
            let el;
            if (event.target.dataset.id) el = event.target;
            else {
                el = $(event.target).parent();
            }
            console.log($(el).data())
            let res = $.get("/admin/orders/" + $(el).data('id') + "/rotate");
            if (res.status == 200) {
                let img = $(el)
                    .closest("tr")
                    .find("img");
                img.attr(
                    "src",
                    img.attr("src").split("?")[0] + "?" + Math.random()
                );
            }
        });
    });
});
