// creer une variable pour chaque bouton
let newGame = $("#newGame"); // c'est le btn nouveau jeu
let solution = $("#solution"); // c'est le btn solution
let propose = $("#propose"); // c'est le btn proposer
let monForm = $("#monForm"); // c'est le formulaire

// le nombre d'essai
let nbEssai = 0;
// le nombre mystere
// let randomNumber = Math.floor(Math.random() * 51);
let randomNumber = generateRandomNumber();

// creer une fonction qui permet de generer
function generateRandomNumber() {
  return Math.floor(Math.random() * 51);
}
// creer une variable pour chaque input

// ecouter le click sur le bouton solution
// si on click sur le bouton solution il affiche le nombre mystere dans message

// ajouter des gestionnaires d'evenements sur les trois boutons
// le bouton newGame : propose un nouveau nombre mystere et remet le nombre d'essais a zero
newGame.on("click", () => {
  // le code a remplir plus tard
  // randomNumber = Math.floor(Math.random() * 51);
  randomNumber = generateRandomNumber();
  nbEssai = 0;
  // monform est considere comme un tableau par jQuery
  monForm[0].reset();
    $("#proposition").attr("disabled", false);
    propose.attr("disabled", false);
});

// le bouton solution : affiche le nombre mystere dans le input avec l'id message
solution.on("click", () => {
  // code ici
    $("#message").val("Le nombre mystère est :" + randomNumber);
    $("#proposition").attr("disabled", true);
    propose.attr("disabled", true);
});

// le bouton propose avec une autre syntaxe
// le bouton propose :
// 1 - verifier si le nombre d'essai n'est pas atteint
// si le nombre d'essai n'est pas atteint
//    incremente le nombre d'essai
//    recuperer la valeur proposer par l'utilisateur
//    il compare avec le nombre mystere (randomNumber)
//          si le nombre mystere est plus petit il affiche le message:
//          "veuillez essayer avec un nombre plus grand"
//          si le nombre mystere est plus grand il affiche le message:
//          "veuillez essayer avec un nombre plus petit"
//          sinon il affiche le message:
//          "bravo vous l'avez!"
//    il affiche l'historique des propositions (separees par un tiret)
//    dans le input reponses
// si le nombre d'essai est egal a 7 on affiche "game over"
propose.click(() => {
  // code ici
  if (nbEssai < 7) { // si le nombre d'essai < 7
    if ($("#proposition").val() != "") { // si la valeur du input est vide
      nbEssai++;
      $("#essai").val(nbEssai);
      let proposition = $("#proposition").val();
      if (proposition < randomNumber) {
        $("#message").val("veuillez essayer avec un nombre plus grand");
      } else if (proposition > randomNumber) {
        $("#message").val("veuillez essayer avec un nombre plus petit");
      } else {
        $("#message").val("bravo vous l'avez!");
      }
      if ($("#reponse").val() == "") {
        $("#reponse").val(proposition);
      } else {
        $("#reponse").val($("#reponse").val() + "-" + proposition);
      }
      $("#proposition").val("");
    } else {
        $("#proposition").css({
            border: "1px solid red"
        })
    }
    } else {
        $("#proposition").attr("disabled", true);
        propose.attr("disabled", true);
       $("#message").val("Game over!");
   }
});
