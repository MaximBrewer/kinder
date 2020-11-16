$(function() {
    $(".rotate-image").on("click", (e) => {
        e.preventDefault();
        $(this).data("id");
        console.log($.get("/admin/orders/" + rotator.dataset.id + "/rotate"))
    });
});