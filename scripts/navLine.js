const scrollY = window.scrollY

const scrollIndicator = document.getElementById("scrollIndicator")

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    const totalHeight = document.documentElement.scrollHeight;

    const viewportHeight = document.documentElement.clientHeight;

    const scrollableDistance = totalHeight - viewportHeight;

    const scrollPercent = scrollableDistance > 0
        ? (scrollTop / scrollableDistance) * 100
        : 0;

    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    var indicatorPos = 0;
    indicatorPos = 0.4175*scrollPercent;

    var offset = 18;
    offset /= 3;

    scrollIndicator.style.transform= `translate3d(-0.9vw, ${indicatorPos+18}svh, 0)`
});
