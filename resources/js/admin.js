$(function() {
    $(".rotate-image").on("click", e => {
        e.preventDefault();
        console.log(
            $.get("/admin/orders/" + $(e.target).data("id") + "/rotate")
        );
    });
});
