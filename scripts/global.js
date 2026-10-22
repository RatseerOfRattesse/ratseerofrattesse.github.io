var mainModal = document.getElementById("mainModal");
var closeButton = document.getElementsByClassName("closeModal")[0];

if (!localStorage.getItem("hasVisited")) {
    mainModal.style.display = "block";
    localStorage.setItem("hasVisited", "true");
}

closeButton.onclick = function() {
    mainModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === mainModal) {
    } else {
        mainModal.style.display = "none";
    }
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        mainModal.style.display = "none";
    }
});

var plusXs = document.querySelectorAll('.plusX');
for(i=0; i<=plusXs.length; i++) {
  plusXs[i].addEventListener('click', function() {
    this.classList.toggle('active');
  }, false);
}