function makeDivVisible() {
    const dropdown = document.getElementById("nav-dropdown");
    dropdown.style.visibility = 'visible';
};
function makeDivInvisible() {
    const dropdown = document.getElementById("nav-dropdown");
    dropdown.style.visibility = 'hidden';
};

console.log(document.getElementById("nav-dropdown"));
const dropper = document.getElementById("nav-dropper");
const dropdown = document.getElementById("nav-dropdown");
dropper.onmouseover = makeDivVisible;
dropper.onmouseleave = makeDivInvisible;
dropdown.onmouseleave = makeDivInvisible;
dropdown.onmouseover = makeDivVisible;
