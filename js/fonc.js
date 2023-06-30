// var tab = [1, 6, 9]
// function someTab(tableau) {
//     let tab = 0;
//     while (let i = 0; i < tableau.length; i++){
//         tab = tab + tableau[i]
//     }
//     return tab;
// }
// var resultat

// ...............    Exercice    ..................

// function reverseWord(str) {
//     let tab = str.split('');
//     tab.reverse();

// }
// sois la variable note
// en utilisant la structure conditionnelle ternaire
// ecrire un code qui permet d'afficher le message bien si note est supperieur ou egal a 15
// mauvais si note est strictement inferieur a 15

// var note = 0;
// if (note >= 15) {

//     console.log("bien");

// }
// else {

//     console.log("mauvais");

// }

// var message = (note >= 15) ? "bien" : "mauvais"

// class Cercle {
//     constructor(rayon) {
//         this.rayon = rayon;
//     }

//     calculerSurface() {
//         let cal = Math.PI * this.rayon * this.rayon;
//         return cal;
//     }
//     afficherInfo() {
//         console.log(this.calculerSurface());
//     }

// }
// let r1 = new Cercle(1);
// r1.afficherInfo();

// class CompteBancaire {
//     constructor(titulaire, solde) {
//         this.titulaire = titulaire;
//         this.solde = solde; 
//     }
//     deposer(montant) {
//         this.solde += montant;
//     }
//     retirer(montant) {
//         this.solde -= montant;
//     }
   
//     afficherInfo() {
//         console.log("Solde actual est " + this.solde + " €");
//     }

// }

// let compte = new CompteBancaire("Oliver", 100);

// compte.deposer(10);
// compte.retirer(7);
// compte.afficherInfo ();
