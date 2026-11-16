var immortals = document.getElementById("immortals");
var i = document.getElementById("i");
var ii = document.getElementById("ii");


function changeDate(searchBar) {
    date = searchBar.value.toUpperCase();
    if (date == "16 LS. C12^(8) 8:00") {
        immortals.src = "/assets/img/misc/ododi/worldbuilding/descension/immortals2.png"
        i.innerHTML = "13 LS. C12<sup>8</sup>";
        ii.innerHTML = "02 LS. C12<sup>8</sup>";
    } else {
        immortals.src = "/assets/img/misc/ododi/worldbuilding/descension/immortals.png"
        i.innerHTML = "00 FS. C12<sup>8</sup>";
        ii.innerHTML = "00 FS. C12<sup>8</sup>";
    }
}