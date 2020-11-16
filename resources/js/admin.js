$(function() {
    $(".rotate-image").on("click", (e) => {
        e.preventDefault();
        console.log($.get("/admin/orders/" + $(this).data("id") + "/rotate"))
    });
});