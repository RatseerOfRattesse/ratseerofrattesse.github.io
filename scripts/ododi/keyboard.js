var keyboard = document.getElementById("godspeakKeyboard");
var output = document.getElementById("keyboardOutput");
var modifying = false;
var currentChar;
var currentConsonant;
var stack = false;

//where regular consonant calls go
function typeChar(character) {
    let img = document.createElement("img");
    if (character.length == 1 || character == 'ay') {
        img.src = "/assets/img/misc/ododi/runes/glyphs/" + character + ".png";
        currentChar = character;
        currentConsonant = character;
        modifying = true;
    } else {
        img.src = "/assets/img/misc/ododi/runes/glyphs/punct/" + character + ".png";
    }
    img.classList.add("outChar");
    output.append(img);
    img.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
    });
    stack = false;
}

//where vowel calls go
function modify(character) {
    var path = new URL(output.lastElementChild?.src).pathname;
    if (
        !modifying ||
        (currentChar == character && (character != 'ay' && character != 'e')) || //check for unstackable vowels
        (currentChar == 'ay' && (character == 'e' || character == 'o')) || // check for illegal ae combos
        (currentChar == 'e' && character == 'i') || // check for illegal e combos
        (currentChar == 'i' && (character == 'a' || character == 'e' || character == 'o' || character == 'u' || character == 'ay')) || // check for illegal i combos
        (currentChar == 'o' && (character == 'a' || character == 'e' || character == 'i' || character == 'u' || character == 'ay')) || // check for illegal o combos
        (currentChar == 'u' && (character == 'a' || character == 'e' || character == 'i' || character == 'o' || character == 'ay')) // check for illegal u combos
    ) {
        console.log('skipped');
        console.log(currentChar);
        console.log(character);
        typeChar(character);
        stack = false;
    } else {
        //remove last to replace
        if (!output.lastElementChild?.classList.contains('placeholderChar')) {
            output.lastElementChild?.remove();
        }
        let img = document.createElement("img");
        if ((character == 'ay' || character == 'e') && stack) {
            console.log('stacking');
            if (character == 'ay') {
                img.src = "/assets/img/misc/ododi/runes/glyphs/ow/" + currentConsonant + "ow.png";
            } else {
                img.src = "/assets/img/misc/ododi/runes/glyphs/ee/" + currentConsonant + "ee.png";
            }
            stack = false;
            modifying = false;
        } else {
            console.log('nonstacking');
            img.src = "/assets/img/misc/ododi/runes/glyphs/" + character + "/" + currentChar + character + ".png";
            stack = true;
            if (currentChar == 'ay' && character == 'ay') {
                img.src = "/assets/img/misc/ododi/runes/glyphs/ow.png";
                stack = false;
                modifying = false;
            } else if (currentChar == 'e' && character == 'e') {
                img.src = "/assets/img/misc/ododi/runes/glyphs/ee.png";
                stack = false;
                modifying = false;
            } else if (currentChar == 'a' || currentChar == 'e') {
                stack = false;
                modifying = false;
            } else if (character != 'ay' && character != 'e') {
                modifying = false;
            }
        }
        currentChar = character;
        img.classList.add("outChar");
        output.append(img);
        img.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        });
    }
}

function backspace() {
    if (!output.lastElementChild?.classList.contains('placeholderChar')) {
        output.lastElementChild?.remove();
    }
    var path = new URL(output.lastElementChild?.src).pathname;
    if (!path.includes("punct")) {
        var fileName = path.substring(path.lastIndexOf('/') + 1);
        if ((fileName[0] == 'a' && fileName[1] == 'y') || (fileName[0] == 'o' && fileName[1] == 'w')) {
            currentChar = 'ay';
        } else if (fileName[0] == 'e' && fileName[1] == 'e') {
            currentChar = 'e';
        } else {
            currentChar = fileName.substring(0, 1);
            currentConsonant = fileName.substring(0, 1);
        }
    } else {
        currentChar = null;
        currentConsonant = null;
    }
    stack = false;
    modifying = true;
}