var lightboxes = document.getElementsByClassName("lightbox");
globalThis.openLightbox = function() {
    for (i = 0; i < lightboxes.length; i++) {
        lightboxes[i].style.display = "block";
    }
}

// Close the Modal
function closeLightbox() {
    for (i = 0; i < lightboxes.length; i++) {
        lightboxes[i].style.display = "none";
    }
}

var slideIndex = 1;
showSlide(slideIndex);

// Next/previous controls
function incrementSlide(n) {
  showSlide(slideIndex += n);
}

// Thumbnail image controls
globalThis.setSlide = function(n) {
  showSlide(slideIndex = n);
}

function showSlide(n) {
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
  for (i = 0; i < captionTexts.length; i++) {
    captionTexts[i].innerHTML = thumbnails[slideIndex-1].alt;
  }
}