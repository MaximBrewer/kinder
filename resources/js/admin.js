const rotators = Object.values(document.getElementsByClassName("rotate-image"));

rotators.forEach(rotator => {
    rotator.addEventListener('click', event => {
        event.preventDefault();
        console.log(event.target.dataset.id);
    });
});
