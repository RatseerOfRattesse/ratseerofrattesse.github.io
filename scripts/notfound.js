const images = [
    "/assets/img/misc/404/ari.png",
    "/assets/img/misc/404/bia.png",
    "/assets/img/misc/404/lloyd.png",
    "/assets/img/misc/404/grim.png",
];

const img = document.getElementById("notFoundImage");

const randomImage = Math.floor(Math.random() * images.length);

const title = document.getElementById("notFoundTitle");

const messages = [
    "it's so hastover",
    "'add to todo'",
    "everything has gone awri",
    "it's lookin grim",
    "this can't be verosaved",
    "dang verosaven",
    "it's all lloydone",
    "it's arodorrodone",
    "results for this url sum to zero",
    "krap isarlith",
    "my name is baruch welcome to my noneuclidean museum",
    "rosa was here",
    "no kannection",
    "we don't talk about the great rat genocide",
    "time to take the castL",
    "looks like its goodbye to this halo",
    "gucci gang, gucci gang",
    "lorax gang was here",
    "song of my soul, this page is dead",
    "the devil got to my javascript",
    "this page got ODODecimated",
    "the snake did this",
    "pumpkin potion cat snake",
    "your chandelier mocks you",
    "big snake hasn't built this part yet",
    "'wait, this isnt easter island'",
    "you are swimming in dumpling soup"
];

const randomText = Math.floor(Math.random() * messages.length);

document.body.style.background = `linear-gradient(to bottom, #191724, transparent), url('${images[randomImage]}'), #eb6f92`;
img.src = images[randomImage];

title.textContent = messages[randomText];