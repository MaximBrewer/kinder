function scrollToElement(id) {
    let elem = document.getElementById(id)
    if (!elem) return false;
    let toY = (elem.getBoundingClientRect().top + document.scrollingElement.scrollTop) * 1;

    if (window.parent.postMessage) {
        window.parent.postMessage({
            scrolltop: toY
        }, '*');
    }
    return false;
};