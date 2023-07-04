let plus = document.getElementById("plus");

let moins = document.getElementById("moins");

let mult = document.getElementById("mult");

let divise = document.getElementById("divise");

let egal = document.getElementById("egal");

let operateur = "+";
// let operateur = "-";
// let operateur = "*";
// let operateur = "/";

plus.addEventListener("click", () => {
    operateur = "+";
});

moins.addEventListener("click", () => {
    operateur = "-";
});

mult.addEventListener("click", () => {
    operateur = "*";
});

divise.addEventListener("click", () => {
    operateur = "/";
});

egal.addEventListener("click", () => {
    let nombre1 = document.getElementById("nombre1").value;
    let nombre2 = document.getElementById("nombre2").value;
    let resultat = 0;
    if (operateur == "+") {
        resultat = Number(nombre1) + Number(nombre2);
        document.getElementById("resultat").value = resultat;
    } else if (operateur == "-") {
        resultat = Number(nombre1) - Number(nombre2);
        document.getElementById("resultat").value = resultat;
    } else if (operateur == "*") {
        resultat = Number(nombre1) * Number(nombre2);
        document.getElementById("resultat").value = resultat;
    } else if (operateur == "/") {
        resultat = Number(nombre1) / Number(nombre2);
        document.getElementById("resultat").value = resultat;
    }

});