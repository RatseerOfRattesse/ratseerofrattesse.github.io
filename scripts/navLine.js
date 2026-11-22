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
    console.log(window.innerHeight);
    /**
    if (isDesktop) { //1064
        indicatorPos = window.innerHeight/120+0.2125*scrollPercent
    } else { //760
        indicatorPos = window.innerHeight/120+0.35*scrollPercent
    }**/
    indicatorPos = 0.4175*scrollPercent;

    scrollIndicator.style.top = `${indicatorPos+19}vh`
});
