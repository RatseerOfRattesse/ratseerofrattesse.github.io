var container = document.getElementById("footnotes");
var returnButton = document.getElementById("returnFootnote");
var currentNote;
var note;
var focused = false;
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function openFootnote(noteLink, index) {
    note = container.children[index-1];
    note.scrollIntoView({ behavior: "smooth", block: "center" });
    focused = true;
    currentNote = noteLink;

    returnButton.classList.add('active');
    note.classList.add('active');

    waitUnfocus()
    await wait(2000);
    note.classList.remove('active');
}

async function waitUnfocus() {
    var noteLog = currentNote;
    await wait(15000);
    if (focused && currentNote == noteLog) {
        focused = false;
        returnButton.classList.toggle('active');
        note.classList.remove('active');
    }
}

function scrollBack() {
    currentNote.scrollIntoView({ behavior: 'smooth', block: "center" });
    focused = false;
    returnButton.classList.toggle('active');
    note.classList.remove('active');
}