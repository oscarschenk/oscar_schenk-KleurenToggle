let toggle = document.getElementById("menu");

function menuToggle() {
    toggle.classList.toggle("display");
    body.classList.toggle("reset");
    body.classList.remove("rood");
    body.classList.remove("groen")
    body.classList.remove("blauw")
    body.classList.remove("roze")
    body.classList.remove("paars")
    kleurText.innerHTML = "Ik ben WIT";
  }

function colorMenuDisappear() {
    colorMenuToggle.classList.remove("display");
}

let burgerToggle = document.getElementById("burgerToggle")
let colorMenuToggle = document.getElementById("menu")

burgerToggle.addEventListener("mouseover", menuToggle);
colorMenuToggle.addEventListener("mouseleave", colorMenuDisappear);


let kleuren = document.querySelectorAll('input[name="kleuren"]');

let kleurenArray = Array.from(kleuren);


let rood = kleurenArray[0];
let groen = kleurenArray[1];
let blauw = kleurenArray[2];
let roze = kleurenArray[3];
let paars = kleurenArray[4];
let body = document.getElementById("body");
let kleurText = document.querySelector(".kleurText");

let maakRood = function (){
    body.classList.add("rood");
    body.classList.remove("reset")
    body.classList.remove("groen")
    body.classList.remove("blauw")
    body.classList.remove("roze")
    body.classList.remove("paars")
    kleurText.innerHTML = "Ik ben ROOD";
    toggle.classList.toggle("display");

}

let maakGroen = function (){
    body.classList.add("groen");
    body.classList.remove("reset")
    body.classList.remove("rood")
    body.classList.remove("blauw")
    body.classList.remove("roze")
    body.classList.remove("paars")
    kleurText.innerHTML = "Ik ben GROEN";
    toggle.classList.toggle("display");

}

let maakBlauw = function (){
    body.classList.add("blauw");
    body.classList.remove("reset")
    body.classList.remove("groen")
    body.classList.remove("rood")
    body.classList.remove("roze")
    body.classList.remove("paars")
    kleurText.innerHTML = "Ik ben BLAUW";
}

let maakRoze = function (){
    body.classList.add("roze");
    body.classList.remove("reset")
    body.classList.remove("groen")
    body.classList.remove("blauw")
    body.classList.remove("rood")
    body.classList.remove("paars")
    kleurText.innerHTML = "Ik ben ROZE";
    toggle.classList.toggle("display");

}

let maakPaars = function (){
    body.classList.add("paars");
    body.classList.remove("reset")
    body.classList.remove("groen")
    body.classList.remove("blauw")
    body.classList.remove("roze")
    body.classList.remove("rood")
    kleurText.innerHTML = "Ik ben PAARS";
    toggle.classList.toggle("display");

}

rood.addEventListener("click", maakRood);
groen.addEventListener("click", maakGroen);
blauw.addEventListener("click", maakBlauw);
roze.addEventListener("click", maakRoze);
paars.addEventListener("click", maakPaars);

const keyPress = function (event) {
    const x = event.keyCode;

    if (x == 49) {
        maakRood();
    }

    if (x == 50) {
        maakBlauw();
    }

    if (x == 51) {
        maakGroen();
    }

    if (x == 52) {
        maakRoze();
    }

    if (x == 53) {
        maakPaars();
    }
}

document.addEventListener('keypress', keyPress);