const growthii = document.getElementById("growthii");
const growthiii = document.getElementById("growthiii");
const growthiv = document.getElementById("growthiv");

var reachedBottom = false;

var sound1 = false;
var sound2 = false;
var sound3 = false;

var scrollTop = window.scrollY || document.documentElement.scrollTop;

var totalHeight = document.documentElement.scrollHeight;

var viewportHeight = document.documentElement.clientHeight;

var scrollableDistance = totalHeight - viewportHeight;

var scrollPercent = scrollableDistance > 0
    ? (scrollTop / scrollableDistance) * 100
    : 0;

if (scrollPercent > 96) {
    if (scrollPercent > 60) {
        growthiv.style.display = "flex";
        const audio = new Audio('../../../assets/audio/ododi/worldbuilding/dysphorium1.wav');
        audio.play();
    } else if (scrollPercent > 30) {
        growthiii.style.display = "flex";
        const audio = new Audio('../../../assets/audio/ododi/worldbuilding/dysphorium2.wav');
        audio.play();
    } else {
        growthii.style.display = "flex";
        const audio = new Audio('../../../assets/audio/ododi/worldbuilding/dysphorium3.wav');
        audio.play();
    }
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

    if (reachedBottom == true) {
        if (scrollPercent > 60) {
            growthiv.style.display = "flex";
            if (!sound1) {
                const audio = new Audio('../../../assets/audio/ododi/worldbuilding/dysphorium1.wav');
                audio.play();
                sound1 = true;
            }
        } else if (scrollPercent > 30) {
            growthiii.style.display = "flex";
            if (!sound2) {
                const audio = new Audio('../../../assets/audio/ododi/worldbuilding/dysphorium2.wav');
                audio.play();
                sound2 = true;
            }
        } else {
            growthii.style.display = "flex";
            if (!sound3) {
                const audio = new Audio('../../../assets/audio/ododi/worldbuilding/dysphorium3.wav');
                audio.play();
                sound3 = true;
            }
        }
    }
});