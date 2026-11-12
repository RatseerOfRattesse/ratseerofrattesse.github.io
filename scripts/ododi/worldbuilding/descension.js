var fakeSecurity = document.getElementById("fakeSecurity");
var blocker = document.getElementById("blocker");
var closeButton = document.getElementsByClassName("closeModal")[1];
var passwordInput = document.getElementById("passwordInput");
var clearance = document.getElementById("clearance");
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

fakeSecurity.style.display = "block";

closeButton.onclick = function() {
    fakeSecurity.style.display = "none";
        blocker.style.display = "none";
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        fakeSecurity.style.display = "none";
        blocker.style.display = "none";
    }
});

passwordInput.addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        processPassword();;
    }
});

async function processPassword(){
    var password = passwordInput.value.toUpperCase();
    clearance.innerText = "1M146auIFh36fK23j";
    await wait(60);
    clearance.innerText = "MKj91Ilfjmaeli99R";
    await wait(60);
    clearance.innerText = "Kfo92jNGS SHIMMER";
    await wait(60);
    clearance.innerText = "4lkmfANDS SHIMMER";
    await wait(60);
    clearance.innerText = "THE SAND RO2309fa";
    await wait(60);
    clearance.innerText = "THE 905IlmajIia//";
    await wait(60);
    clearance.innerText = "PRO6ESSINGOfnak//";
    await wait(60);
    clearance.innerText = "PROCESSING     //";

    for (var i = 0; i <= 3; i++) {
        clearance.innerText = "PROCESSING     //";
        await wait(250);
        clearance.innerText = "PROCESSING.    //";
        await wait(250);
        clearance.innerText = "PROCESSING..   //";
        await wait(250);
        clearance.innerText = "PROCESSING...  //";
        await wait(250);
    }
    clearance.innerText = "PROCESSED";
    await wait(80);
    clearance.innerText = "";

    if (password == "EHN SAHNS MI RAELIA HASTUR") {
        window.location.assign("../spoiler2/dysphorium.html");
    }
}