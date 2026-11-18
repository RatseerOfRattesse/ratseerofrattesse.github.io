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

/**
THIS CODE FROM HERE TO sha1Hex FUNCTION SOURCED FROM https://medium.com/@thomas_40553/how-to-secure-encrypt-and-decrypt-data-within-the-browser-with-aes-gcm-and-pbkdf2-057b839c96b6
**/

async function deriveKey(password, salt) {
  const encodedPassword = new TextEncoder().encode(password);
  const baseKey = await window.crypto.subtle.importKey(
    "raw",
    encodedPassword,
    { name: "PBKDF2" },
    false,
    ["deriveKey"],
  );

  const derivedKey = await window.crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt,
      iterations: 600000,
      hash: "SHA-256",
    },
    baseKey,
    { name: "AES-GCM", length: 256 },
    true,
    ["encrypt", "decrypt"],
  );

  return derivedKey;
}

/**
async function encryptData(data, password) {
  const salt = new Uint8Array([178,176,145,22,255,239,153,126,103,223,217,107,78,0,142,21]); //window.crypto.getRandomValues(new Uint8Array(16)); // 128-bit salt
  const iv = new Uint8Array([81,142,92,232,80,49,44,30,16,182,117,75]); //window.crypto.getRandomValues(new Uint8Array(12)); // 12 bytes for AES-GCM
  console.log("Salt: " + salt + "\n IV: " + iv)
  const key = await deriveKey(password, salt);
  const encodedData = new TextEncoder().encode(data);

  const encryptedContent = await window.crypto.subtle.encrypt(
    {
      name: "AES-GCM",
      iv,
      tagLength: 128, // 128-bit tag length
    },
    key,
    encodedData,
  );

  // extract the ciphertext and authentication tag
  const ciphertext = encryptedContent.slice(0, encryptedContent.byteLength - 16);
  const authTag = encryptedContent.slice(encryptedContent.byteLength - 16);

  return {
    ciphertext: new Uint8Array(ciphertext),
    iv,
    authTag: new Uint8Array(authTag),
    salt,
  };
}
**/

async function decryptData(encryptedData, password) {
  const { ciphertext, iv, authTag, salt } = encryptedData;
  const key = await deriveKey(password, salt);

  // re-combine the ciphertext and the authentication tag
  const dataWithAuthTag = new Uint8Array(ciphertext.length + authTag.length);
  dataWithAuthTag.set(ciphertext, 0);
  dataWithAuthTag.set(authTag, ciphertext.length);


  try {
    const decryptedContent = await window.crypto.subtle.decrypt(
      { name: "AES-GCM", iv, tagLength: 128 },
      key,
      dataWithAuthTag,
    );

    return new TextDecoder().decode(decryptedContent);
  } catch (error) {
    if (error instanceof DOMException && error.name === "OperationError") {
      return null;
    }

    throw error;
  }
}

async function sha1Hex(text) {
  const bytes = new TextEncoder().encode(text);
  const hashBuffer = await crypto.subtle.digest("SHA-1", bytes);
  return Array.from(new Uint8Array(hashBuffer), b => b.toString(16).padStart(2, "0")).join("");
}

const link = { "ciphertext": new Uint8Array([212, 138, 63, 184, 62, 27, 51, 154, 210, 146, 46, 234, 115, 61, 173, 45, 57, 125, 235, 70, 57, 253, 185, 0, 70, 120, 235, 143, 39, 248, 233, 163, 62, 254, 58, 222, 146, 33, 33, 94, 166, 126, 100, 220, 74, 94, 31, 152, 45, 224, 80, 169, 92, 34, 199, 164, 236]), "iv": new Uint8Array([81, 142, 92, 232, 80, 49, 44, 30, 16, 182, 117, 75]), "authTag": new Uint8Array([189, 22, 186, 53, 25, 190, 32, 25, 231, 198, 133, 62, 236, 37, 100, 123]), "salt": new Uint8Array([178, 176, 145, 22, 255, 239, 153, 126, 103, 223, 217, 107, 78, 0, 142, 21]) };

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
    hashed = await sha1Hex(password);
    //console.log(password);
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

    console.log(hashed);
    const decryptedLink = await decryptData(link, hashed);
    console.log(decryptedLink);
    if (decryptedLink != null && decryptedLink.includes("https://")) {
        clearance.innerText = "ACCEPTED. WELCOME, VENERABLE DAESA.";
        await wait(200);
        window.location.assign("https://file.garden/Zi28N2lFSSn-KxkR/ododi/rori/lost.html");
    } else {
        var words = password.split(" ");
        var hashedWords = [];
        for (const word of words) {
            var hashedWord = await sha1Hex(word);
            hashedWords.push(hashedWord);
        }
        console.log(hashedWords);
        if (hashedWords.includes("249dcb7765f663fe4cd5977921e83d5afa2c436c") || hashedWords.includes("d4e5fd5793ce34615f15ab297c5d1c3eb5a67e16")) {
            clearance.innerText = "REJECTED. BEGONE, VENERABLE AHNDAESA.";
        } else if (hashedWords.includes("953a03875308d7c9e641f6053d5f964a8b238158") || (hashedWords.includes("43c2ae2eacabed5dd0c4aba299cd220d7e8a918c") && hashedWords.includes("50f3058c291765cb6d4e43a94ae42b2c4f0fa770"))) {
            clearance.innerText = "REJECTED. WRONG HASTOR.";
        } else {
            clearance.innerText = "REJECTED. DO NOT ATTEMPT TO FORCE ACCESS.";
        }
    }
}