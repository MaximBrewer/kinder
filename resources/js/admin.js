const rotators = Object.values(document.getElementsByClassName("rotate-image"));

rotators.forEach(rotator => {
    rotator.addEventListener(event => {
        event.preventDefault();
        console.log(event.target.dataset.id);
    });
});
