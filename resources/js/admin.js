const rotators = Object.values(document.getElementsByClassName("rotate-image"));

rotators.forEach(rotator => {
    rotator.addEventListener("click", event => {
        event.preventDefault();
        console.log(rotator.dataset, event.target.dataset);

        const request = new XMLHttpRequest();
        const url = "/admin/orders/" + event.target.dataset.id + "/rotate";
        request.responseType = "json";
        request.open("GET", url, true);
        request.addEventListener("readystatechange", () => {
            if (request.readyState === 4 && request.status === 200) {
                let obj = request.response;
                let arr = obj.results;
            }
        });
        request.send();
    });
});
