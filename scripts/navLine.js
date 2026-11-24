const scrollY = window.scrollY

const scrollIndicator = document.getElementById("scrollIndicator")
var scrollTop = window.scrollY || document.documentElement.scrollTop;
var totalHeight = document.documentElement.scrollHeight;
var viewportHeight = document.documentElement.clientHeight;
var scrollableDistance = totalHeight - viewportHeight;
var scrollPercent = scrollableDistance > 0
    ? (scrollTop / scrollableDistance) * 100
    : 0;

var indicatorPos = 0;
indicatorPos = 0.4175*scrollPercent;
scrollIndicator.style.transform= `translate3d(-0.9vw, ${indicatorPos+18}svh, 0)`

window.addEventListener('scroll', () => {
    scrollTop = window.scrollY || document.documentElement.scrollTop;

    totalHeight = document.documentElement.scrollHeight;

    viewportHeight = document.documentElement.clientHeight;

    scrollableDistance = totalHeight - viewportHeight;

    scrollPercent = scrollableDistance > 0
        ? (scrollTop / scrollableDistance) * 100
        : 0;

    indicatorPos = 0.4175*scrollPercent;

    scrollIndicator.style.transform= `translate3d(-0.9vw, ${indicatorPos+18}svh, 0)`
});
