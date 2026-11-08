var fakeSecurity = document.getElementById("fakeSecurity");
var blocker = document.getElementById("blocker");
var closeButton = document.getElementsByClassName("closeModal")[1];

fakeSecurity.style.display = "block";

closeButton.onclick = function() {
    fakeSecurity.style.display = "none";
        blocker.style.display = "none";
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        fakeSecurity.style.display = "none";
        blocker.style.display = "none";
    }
});


const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

if (isDesktop) {
    const script = document.createElement('script');
    script.src = "../../../../scripts/ododi/worldbuilding/dysphorium_desktop.js";
    script.defer = true;
    document.head.appendChild(script);
}

const scrollY = window.scrollY;

const shadows = document.getElementById("shadowContainer");

var reachedBottom = false;

var scrollTop = window.scrollY || document.documentElement.scrollTop;

var totalHeight = document.documentElement.scrollHeight;

var viewportHeight = document.documentElement.clientHeight;

var scrollableDistance = totalHeight - viewportHeight;

var scrollPercent = scrollableDistance > 0
    ? (scrollTop / scrollableDistance) * 100
    : 0;

if (scrollPercent > 96) {
    shadows.style.opacity = `${scrollPercent/100-0.25}`;
}

window.addEventListener('scroll', () => {
    scrollTop = window.scrollY || document.documentElement.scrollTop;

    totalHeight = document.documentElement.scrollHeight;

    viewportHeight = document.documentElement.clientHeight;

    scrollableDistance = totalHeight - viewportHeight;

    scrollPercent = scrollableDistance > 0
        ? (scrollTop / scrollableDistance) * 100
        : 0;


    if (scrollPercent > 96) {
        reachedBottom = true;
    }

    if (!reachedBottom) {
        shadows.style.opacity = `${scrollPercent/100-0.25}`;
    }
});