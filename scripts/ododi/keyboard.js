var keyboard = document.getElementById("godspeakKeyboard");
var output = document.getElementById("keyboardOutput");
var modifying = false;
var auxVowel;
var currentChar;

function typeChar(character) {
    auxVowel = null;
    let img = document.createElement("img");
    if (character.length == 1 || character == 'ay') {
        img.src = "/assets/img/misc/ododi/runes/glyphs/" + character + ".png";
        currentChar = character;
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
}

function modify(character) {
    if (!modifying) {
        typeChar(character);
    } else {
        output.lastElementChild?.remove()
        let img = document.createElement("img");
        if (auxVowel != null) {
            img.src = "/assets/img/misc/ododi/runes/glyphs/" + auxVowel + "/" + currentChar + auxVowel + ".png";
            auxVowel = null;
            modifying = false;
        } else {
            img.src = "/assets/img/misc/ododi/runes/glyphs/" + character + "/" + currentChar + character + ".png";
            if (character == 'ay') {
                auxVowel = 'ow';
            } else if (character == 'e') {
                auxVowel = 'ee';
            }
        }
        if (character == 'ay' && currentChar == 'ay') {
            img.src = "/assets/img/misc/ododi/runes/glyphs/ow.png";
        } else if (character == 'e' && currentChar == 'e') {
            img.src = "/assets/img/misc/ododi/runes/glyphs/ee.png";
        }
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
        if (fileName[0] == 'a' && fileName[1] == 'y') {
            currentChar = 'ay';
        } else if (fileName[0] == 'e' && fileName[1] == 'e') {
            currentChar = 'ee';
        } else if (fileName[0] == 'o' && fileName[1] == 'w') {
            currentChar = 'ow';
        } else {
            currentChar = fileName.substring(0, 1);
        }
    }
    auxVowel = null;
    console.log(currentChar);
}
