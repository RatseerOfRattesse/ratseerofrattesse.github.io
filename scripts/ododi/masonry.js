const images = [
    "../../assets/img/art/ododiDisplay/amirlithic aesthetic draft.jpg",
    "../../assets/img/art/ododiDisplay/ari.png",
    "../../assets/img/art/ododiDisplay/bia.png",
    "../../assets/img/art/ododiDisplay/castell.png",
    "../../assets/img/art/ododiDisplay/Ch3-2.png",
    "../../assets/img/art/ododiDisplay/comic test.png",
    "../../assets/img/art/ododiDisplay/coverart.png",
    "../../assets/img/art/ododiDisplay/cyclical.png",
    "../../assets/img/art/ododiDisplay/disillusioned.png",
    "../../assets/img/art/ododiDisplay/Great Immortals.png",
    "../../assets/img/art/ododiDisplay/grim.png",
    "../../assets/img/art/ododiDisplay/grim-old.png",
    "../../assets/img/art/ododiDisplay/Haelborne.png",
    "../../assets/img/art/ododiDisplay/Haelborne Latticetrotter.png",
    "../../assets/img/art/ododiDisplay/halos.png",
    "../../assets/img/art/ododiDisplay/Hexacampi.png",
    "../../assets/img/art/ododiDisplay/prologue.png",
    "../../assets/img/art/ododiDisplay/prologue-1.png",
    "../../assets/img/art/ododiDisplay/Prologue-1v4.png",
    "../../assets/img/art/ododiDisplay/prologue-2.png",
    "../../assets/img/art/ododiDisplay/purplebuildings.png",
    "../../assets/img/art/ododiDisplay/sample.png",
    "../../assets/img/art/ododiDisplay/test.png"
]

const masonry = document.querySelector(".masonry");
const lightboxContent = document.querySelector(".lightboxContent");

let usedIndexes = [];
for (let i = 1; i <= 6; i++) {
    let randomIndex = Math.floor(Math.random() * images.length);

    if (!usedIndexes.includes(randomIndex)) {
        let img1 = document.createElement("img");
        img1.src = images[randomIndex];
        img1.onclick = () => {
            window.openLightbox();
            window.setSlide(1);
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

        let img2 = document.createElement("img");
        img2.src = images[randomIndex];
        img2.style.width = "100%";
        img2.style.margin = "0 auto";
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

        let fileName = images[randomIndex].split(/[/\\]/).pop();
        let processedName = fileName.slice(0, -4).toLowerCase();

        let img3 = document.createElement("img");
        img3.src = images[randomIndex];
        img3.onclick = () => {
            window.setSlide(i);
        }
        img3.alt = processedName;
        img3.classList.add("lightboxThumbnail");
        img3.style.height = "10vh";

        let newLightboxThumbnailContainer = document.createElement("div");
        newLightboxThumbnailContainer.classList.add("lightboxThumbnailContainer");
        newLightboxThumbnailContainer.append(img3);

        lightboxContent.append(newLightboxThumbnailContainer);

        usedIndexes.push(randomIndex);
    } else {
        i -= 1;
    }
}