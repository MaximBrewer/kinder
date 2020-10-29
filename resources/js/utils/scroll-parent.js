const bdi_scrollTop = (scrolltop) => {
    if (window.parent.postMessage) {
        window.parent.postMessage({
            scrolltop: scrolltop
        }, '*');
    }
}

export default function scrollToElement(ref) {
    let elem = ref.current;
    if (!elem) return false;
    let toY = (elem.getBoundingClientRect().top + document.scrollingElement.scrollTop) * 1 - 40;
    bdi_scrollTop(toY);
    return false;
};