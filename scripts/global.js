var mainModal = document.getElementById("mainModal");
var closeButton = document.getElementsByClassName("closeModal")[0];

closeButton.onclick = function() {
  mainModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target != mainModal) {
    mainModal.style.display = "none";
  }
}