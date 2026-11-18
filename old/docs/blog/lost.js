var immortals = document.getElementById("immortals");
var i = document.getElementById("i");
var ii = document.getElementById("ii");

async function sha1Hex(text) {
  const bytes = new TextEncoder().encode(text);
  const hashBuffer = await crypto.subtle.digest("SHA-1", bytes);
  return Array.from(new Uint8Array(hashBuffer), b => b.toString(16).padStart(2, "0")).join("");
}

async function changeDate(searchBar) {
    date = await sha1Hex(searchBar.value.toUpperCase());
    console.log(date);
    if (date == "7a91d30868877e757cfa2da3afc6a6d762ef61bc") {
        immortals.src = "immortals2.png"
        i.innerHTML = "13 LS. C12<sup>8</sup>";
        ii.innerHTML = "02 LS. C12<sup>8</sup>";
    } else {
        immortals.src = "immortals.png"
        i.innerHTML = "00 FS. C12<sup>8</sup>";
        ii.innerHTML = "00 FS. C12<sup>8</sup>";
    }
}



