const scrollY = window.scrollY;

const shadows = document.getElementById("shadowContainer");

const growthii = document.getElementById("growthii");
const growthiii = document.getElementById("growthiii");
const growthiv = document.getElementById("growthiv");
var reachedBottom = false;

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    const totalHeight = document.documentElement.scrollHeight;

    const viewportHeight = document.documentElement.clientHeight;

    const scrollableDistance = totalHeight - viewportHeight;

    const scrollPercent = scrollableDistance > 0
        ? (scrollTop / scrollableDistance) * 100
        : 0;

    console.log(`Scroll Progress: ${Math.round(scrollPercent)}%`);


    if (scrollPercent > 90) {
        reachedBottom = true;
    }

    if (!reachedBottom) {
        shadows.style.opacity = `${scrollPercent/100-0.25}`;
    }

    if (reachedBottom == true) {
        if (scrollPercent > 60) {
            growthiv.style.display = "flex";
            console.log("iv");
        } else if (scrollPercent > 30) {
            growthiii.style.display = "flex";
            console.log("iii");
        } else {
            growthii.style.display = "flex";
            console.log("ii");
        }
    }
});
