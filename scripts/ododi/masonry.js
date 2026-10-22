const images = [
    [
        "../../assets/img/art/ododiDisplay/amirlithic aesthetic draft.jpg",
        "Amirlithic Aesthetic | Sketch",
        "One day I decided to do some concepting on paper and turned a fancy spoked wheel symbol and a weird boat into an architectural style. This is to be used for Amirlith, the ruling power in the ODODI superreality."
    ],
    [
        "../../assets/img/art/ododiDisplay/ari.png",
        "Ari V5",
        "What I think is the fifth generation of Ari's design. I've made her stockier here and added more red-brown accents, including actually visually representing her dimensional bag. The wing design is also new. Won't last long. There will be a new one."
    ],
    [
        "../../assets/img/art/ododiDisplay/bia.png",
        "Bia v3",
        "What I think is the third generation of Bia's design. Most of the costume is completely new from last version; most characters outside Ari and Grim were only really half formed at this time. Won't last long. There will be a new one."
    ],
    [
        "../../assets/img/art/ododiDisplay/castell.png",
        "Castell v2",
        "Castell's second design, with a sallower face and developed art style. Won't last long. There will be a new one."
    ],
    [
        "../../assets/img/art/ododiDisplay/Ch3-2.png",
        "Illustration Ch3-2",
        "I loved doing the expressions on this one and think they're some of my best. Some of the proportions are off though, and so is perspective. Look at Rosa and Noka back there, they're insanely tall."
    ],
    [
        "../../assets/img/art/ododiDisplay/comic test.png",
        "ONSLAUGHT",
        "One of my only older pieces that not only holds up, but still gets used to represent the series. I love fight scene slop!"
    ],
    [
        "../../assets/img/art/ododiDisplay/coverart.png",
        "ODODI Book Cover Art",
        "Will be replaced. It's just clunky and awkward and not representative enough of the story. Pretty colours tho!"
    ],
    [
        "../../assets/img/art/ododiDisplay/cyclical.png",
        "Cyclical",
        "Some random fun. Not really canon - I don't tend to give Ari the firmament/reality bending claws anymore, but I still think they were quite cool. Maybe for the final fight."
    ],
    [
        "../../assets/img/art/ododiDisplay/disillusioned.png",
        "Disillusioned",
        "More random fun art. The perspective needs work here, but I think the piece stands quite well despite that and the anatomy issues."
    ],
    [
        "../../assets/img/art/ododiDisplay/Great Immortals.png",
        "Concept Art - the Great Immortals",
        "Some semi-goofy designs for the big ones. Will probably be revised too."
    ],
    [
        "../../assets/img/art/ododiDisplay/grim.png",
        "Grim v3",
        "The dress is new from v2, as well as further fluidity with limbs. I think I'm actually happy with this one!"
    ],
    [
        "../../assets/img/art/ododiDisplay/Haelborne.png",
        "Concept Art - Haelborne",
        "Some design work and brainstorming on the Haelborne. I may redesign them for thematic resonance later? But depends. I think my inhuman designs, such as these, as usually better than human ones."
    ],
    [
        "../../assets/img/art/ododiDisplay/Haelborne Latticetrotter.png",
        "Concept Art - Haelborne Latticetrotter",
        "A ship used by the Haelborne to cross realities and stage invasions. Heavily inspired by Simon Stalenhag's flying ships."
    ],
    [
        "../../assets/img/art/ododiDisplay/halos.png",
        "Halos v2",
        "Far far better than v1. God I hate v1. It's so fucking stupid looking. And this one still needs work as well."
    ],
    [
        "../../assets/img/art/ododiDisplay/Hexacampi.png",
        "Concept Art - Hexacampi",
        "BIG CRAB!!! Best animal ever."
    ],
    [
        "../../assets/img/art/ododiDisplay/prologue.png",
        "Chapter Portrait - Prologue",
        "A bunch of mini drawings I used to open a few new chapters. They quickly drop off in quality after this."
    ],
    [
        "../../assets/img/art/ododiDisplay/prologue-1.png",
        "Old ODODI Webcomic - Test Page 1",
        "From an attempt at starting the webcomic way back before while I was still writing the book as well. Composition heavily inspired by Kochab. God that comic is gorgeous."
    ],
    [
        "../../assets/img/art/ododiDisplay/Prologue-1v4.png",
        "Illustration - P-1",
        "Finally happy with this illustration after so many redoes. Really like the colours now! Shame it's probably never getting used again."
    ],
    [
        "../../assets/img/art/ododiDisplay/prologue-2.png",
        "Old ODODI Webcomic - Test Page 2",
        "From an attempt at starting the webcomic way back before while I was still writing the book as well. I wanted to add title cards to my characters after my first reading of Goodbye to Halos."
    ],
    [
        "../../assets/img/art/ododiDisplay/purplebuildings.png",
        "Rattesse",
        "I didn't decide this was Rattesse originally, but I figured why not when the time came to lore something outta this. It was originally just a decorative piece to throw around the old site."
    ],
    [
        "../../assets/img/art/ododiDisplay/sample.png",
        "Webcomic - Unfinished Test Page",
        "The first attempted page for the new comic. Didn't quite like it so gave up halfway."
    ],
    [
        "../../assets/img/art/ododiDisplay/test.png",
        "Webcomic - Title Card Test Page",
        "This is the first finished concept for the webcomic. The style is a little too complex to be on all pages, but they'll work for fancy pages like these intro cards."
    ]
]

const masonry = document.querySelector(".masonry");
const lightboxContent = document.querySelector(".lightboxContent");

let usedIndexes = [];
for (let i = 1; i <= 6; i++) {
    let randomIndex = Math.floor(Math.random() * images.length);

    if (!usedIndexes.includes(randomIndex)) {
        let img1 = document.createElement("img");
        img1.src = images[randomIndex][0];
        img1.onclick = () => {
            window.openLightbox();
            window.setSlide(i);
        };
        img1.classList.add("lightboxCapable")
        img1.classList.add("fadeIn")
        img1.classList.add("emergeFade")

        let newItem = document.createElement("div");
        newItem.classList.add("masonryItem");
        newItem.append(img1);

        masonry.append(newItem);

        let newLightBoxSlide = document.createElement("div");
        newLightBoxSlide.classList.add("lightboxSlide");
        newLightBoxSlide.setAttribute('data-title', images[randomIndex][1]);
        newLightBoxSlide.setAttribute('data-desc', images[randomIndex][2]);

        let img2 = document.createElement("img");
        img2.classList.add("lightboxImg");
        img2.src = images[randomIndex][0];
        img2.style.width = "100%";
        img2.style.height = "100vh";
        img2.style.objectFit = "contain";
        img2.style.margin = "1vh auto";
        newLightBoxSlide.append(img2);

        if (i == 1) {
            lightboxContent.prepend(newLightBoxSlide);
        } else {
            let lightboxSlides = document.querySelectorAll('.lightboxSlide');
            let lastSlide = lightboxSlides[lightboxSlides.length - 1];
            if (lastSlide) {
                lastSlide.after(newLightBoxSlide);
            }
        }

        let img3 = document.createElement("img");
        img3.src = images[randomIndex][0];
        img3.onclick = () => {
            window.setSlide(i);
        }
        img3.classList.add("lightboxThumbnail");
        img3.style.height = "10vh";
        img3.style.width = "100%";
        img3.style.objectFit = "contain";

        let newLightboxThumbnailContainer = document.createElement("div");
        newLightboxThumbnailContainer.classList.add("lightboxThumbnailContainer");
        newLightboxThumbnailContainer.append(img3);

        lightboxContent.append(newLightboxThumbnailContainer);

        usedIndexes.push(randomIndex);
    } else {
        i -= 1;
    }
}