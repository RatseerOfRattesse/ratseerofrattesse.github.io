var lightboxes = document.getElementsByClassName("lightbox");
var lightboxImgs = document.getElementsByClassName("lightboxImg");
var lightboxThumbnails = document.getElementsByClassName("lightboxThumbnail");
var lightboxPrevs = document.getElementsByClassName("lightboxPrev");
var lightboxNexts = document.getElementsByClassName("lightboxNext");
var closeLightboxes = document.getElementsByClassName("closeLightbox");
var plusXs = document.getElementsByClassName("plusX");
var imageModal = document.getElementById("imageModal");
var imageModalOpen = false;
var doNotClose = [...lightboxImgs, ...lightboxThumbnails, ...lightboxPrevs, ...lightboxNexts, ...closeLightboxes, ...plusXs]

globalThis.openLightbox = function() {
    for (i = 0; i < lightboxes.length; i++) {
        lightboxes[i].style.display = "block";
    }
}

for (i = 0; i < lightboxes.length; i++) {
    lightboxes[i].onclick = function(event) {
        var close = true;
        for (i = 0; i < doNotClose.length; i++) {
            if (event.target === doNotClose[i]) {
                close = false;
            }
        }
        if (close) {
            closeLightbox();
        }
    }
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeLightbox();
    }
});

function closeLightbox() {
    for (i = 0; i < lightboxes.length; i++) {
        lightboxes[i].style.display = "none";
    }
}

function openInfo() {
    if (imageModalOpen) {
        imageModal.style.display = "none";
        imageModalOpen = false;
    } else {
        imageModal.style.display = "block";
        imageModalOpen = true;
    }
}

var slideIndex = 1;
showSlide(slideIndex);

function incrementSlide(n) {
  showSlide(slideIndex += n);
}

globalThis.setSlide = function(n) {
  showSlide(slideIndex = n);
}

function showSlide(n) {
  var toRemove = imageModal.querySelectorAll('.lightboxParagraph');
  toRemove.forEach(child => child.remove());
  var i;
  var slides = document.getElementsByClassName("lightboxSlide");
  var thumbnails = document.getElementsByClassName("lightboxThumbnail");
  var captionTexts = document.getElementsByClassName("lightboxCaption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < thumbnails.length; i++) {
    thumbnails[i].className = thumbnails[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  thumbnails[slideIndex-1].className += " active";
  imageModal.firstElementChild.textContent = slides[slideIndex-1].getAttribute('data-title');
  var paragraphs = slides[slideIndex-1].getAttribute('data-desc').split(/\r?\n/).filter(Boolean);
  console.log(paragraphs);
  for (i = 0; i < paragraphs.length; i++) {
    let newParagraph = document.createElement("p");
    newParagraph.textContent = paragraphs[i];
    newParagraph.classList.add("lightboxParagraph");
    imageModal.append(newParagraph);
  }
  for (i = 0; i < captionTexts.length; i++) {
    captionTexts[i].innerHTML = thumbnails[slideIndex-1].alt;
  }
}