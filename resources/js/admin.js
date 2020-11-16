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
            $.get("/admin/orders/" + $(el).data("id") + "/rotate", function(
                data
            ) {
                let img = $(el)
                    .parent()
                    .parent()
                    .find("img");
                img.attr(
                    "src",
                    img.attr("src").split("?")[0] + "?" + Math.random()
                );
            });
        });
    });
});
