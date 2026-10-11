const images = [
    "../../assets/img/misc/splashArtCandidates/BADASSERY.png",
    "../../assets/img/misc/splashArtCandidates/BANG.png",
    "../../assets/img/misc/splashArtCandidates/bloom.png",
    "../../assets/img/misc/splashArtCandidates/Ch1-2.png",
    "../../assets/img/misc/splashArtCandidates/Ch1-3.png",
    "../../assets/img/misc/splashArtCandidates/Ch2-1.png",
    "../../assets/img/misc/splashArtCandidates/Ch2-3.png",
    "../../assets/img/misc/splashArtCandidates/Ch3-1.png",
    "../../assets/img/misc/splashArtCandidates/ONSLAUGHT.png",
    "../../assets/img/misc/splashArtCandidates/dropped this, silly.png",
    "../../assets/img/misc/splashArtCandidates/eepy.png",
    "../../assets/img/misc/splashArtCandidates/EYES.png",
    "../../assets/img/misc/splashArtCandidates/Great Immortals.png",
    "../../assets/img/misc/splashArtCandidates/Haelborne Latticetrotter.png",
    "../../assets/img/misc/splashArtCandidates/Haelborne.png",
    "../../assets/img/misc/splashArtCandidates/herebound and up.png",
    "../../assets/img/misc/splashArtCandidates/Hexacampi.png",
    "../../assets/img/misc/splashArtCandidates/Nobly Gazing.png",
    "../../assets/img/misc/splashArtCandidates/indifference.png",
    "../../assets/img/misc/splashArtCandidates/KOCHAB.gif",
    "../../assets/img/misc/splashArtCandidates/live laugh coob.png",
    "../../assets/img/misc/splashArtCandidates/map of Kaaldenvale.png",
    "../../assets/img/misc/splashArtCandidates/CYNOSURE OF CHANGE.png",
    "../../assets/img/misc/splashArtCandidates/ONE POSTER.png",
    "../../assets/img/misc/splashArtCandidates/piltover.png",
    "../../assets/img/misc/splashArtCandidates/ODODI Comic PG1.png",
    "../../assets/img/misc/splashArtCandidates/Prologue-1v4.png",
    "../../assets/img/misc/splashArtCandidates/ODODI Comic PG2.png",
    "../../assets/img/misc/splashArtCandidates/RAHHHH.png",
    "../../assets/img/misc/splashArtCandidates/stargazing.png",
    "../../assets/img/misc/splashArtCandidates/sunkissed.png",
    "../../assets/img/misc/splashArtCandidates/TAIDA DE IINA.png",
    "../../assets/img/misc/splashArtCandidates/The Narrator.png",
    "../../assets/img/misc/splashArtCandidates/wildberry.png",
    "../../assets/img/misc/splashArtCandidates/xaphan.png",
    "../../assets/img/misc/splashArtCandidates/fireweed.png",
    "../../assets/img/misc/splashArtCandidates/cyclical.png",
    "../../assets/img/misc/splashArtCandidates/disillusioned.png",
    "../../assets/img/misc/splashArtCandidates/breads.png",
    "../../assets/img/misc/splashArtCandidates/star signs.gif",
    "../../assets/img/misc/splashArtCandidates/tbscover.png",
]

const randomIndex = Math.floor(Math.random() * images.length);

document.body.style.background = `linear-gradient(to right, black, transparent), url('${images[randomIndex]}')`;

const splashName = document.getElementById("splashName");
const fileName = images[randomIndex].split(/[/\\]/).pop();
const processedName = fileName.slice(0, -4).toLowerCase()
splashName.textContent = processedName

document.body.style.backgroundSize = `100vw`;
document.body.style.backgroundPosition = `center`;
document.body.style.backgroundAttachment = `fixed`
document.body.style.backgroundRepeat = `no-repeat`