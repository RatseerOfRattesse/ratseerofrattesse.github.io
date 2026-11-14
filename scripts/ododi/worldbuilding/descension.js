var fakeSecurity = document.getElementById("fakeSecurity");
var blocker = document.getElementById("blocker");
var closeButton = document.getElementsByClassName("closeModal")[1];
var clearance = document.getElementById("clearance");
var output = document.getElementById("keyboardOutput");
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

async function submit() {
    var password = "";
    for (i = 0; i < output.childElementCount; i++) {
        if (!output.children[i].classList.contains('placeholderChar')) {
            var path = new URL(output.children[i].src).pathname;
            var fileName = path.substring(path.lastIndexOf('/') + 1);
            var protostring = fileName.slice(0, -4);
            switch (protostring) {
                case "apostrophe":
                case 'posession':
                    protostring = "'";
                    break;
                case 'colon':
                    protostring = ": ";
                    break;
                case 'dash':
                    protostring = "-";
                    break;
                case 'exclamation':
                    protostring = "! ";
                    break;
                case 'fullpause':
                    protostring = ". ";
                    break;
                case 'pause':
                    protostring = ", ";
                    break;
                case 'question':
                    protostring = "?";
                    break;
                case 'quote':
                    protostring = "\"";
                    break;
                case 'semipause':
                    protostring = " ";
                    break;
                default:
                    protostring = protostring;
            }
            password += protostring;
        }
    }
    password = password.toUpperCase();
    console.log(password);
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
        await wait(75);
        clearance.innerText = "PROCESSING.    //";
        await wait(75);
        clearance.innerText = "PROCESSING..   //";
        await wait(75);
        clearance.innerText = "PROCESSING...  //";
        await wait(75);
    }
    clearance.innerText = "PROCESSED";
    await wait(80);

    if (password == "EM SAMS MEE RAYLEEA HASTOR") {
        clearance.innerText = "ACCEPTED. WELCOME, VENERABLE DAESA.";
        await wait(200);
        window.location.assign("/old/docs/Our%20Deities%20of%20Dreadful%20Ineptitude/lost.html");
    } else if (password.includes("RAYLEEA") || password.includes("HASTOR")) {
        clearance.innerText = "REJECTED. BEGONE, VENERABLE AHNDAESA.";
    } else if (password.includes("HASTUR") || (password.includes("ELO") || password.includes("KEEMJ") )) {
        clearance.innerText = "REJECTED. WRONG HASTOR.";
    } else {
        clearance.innerText = "REJECTED. DO NOT ATTEMPT TO FORCE ACCESS.";
    }
}