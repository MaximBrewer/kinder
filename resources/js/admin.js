const rotators = Object.values(document.getElementsByClassName("rotate-image"));

rotators.forEach(rotator => {
    rotator.addEventListener("click", event => {
        event.preventDefault();
        const request = new XMLHttpRequest();
        const url = "/admin/orders/" + rotator.dataset.id + "/rotate";
        request.responseType = "json";
        request.open("GET", url, true);
        request.addEventListener("readystatechange", () => {
            if (request.readyState === 4 && request.status === 200) {
                let obj = request.response;
                let arr = obj.results;
                console.log(request.response)
            }
        });
        request.send();
    });
});
