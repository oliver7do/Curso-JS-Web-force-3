// creation de la classe personne
class Personne{
    // on appelle la fonction constructor (nom imposé par js) avec 2 param : n et a 
    constructor(n, a) { 
        this.nom = n; // on declare une variable nom qui prend la valeur de n
        this.age = a; // on declare une variable age qui prend la valeur de a
    }

    saluer() { // la methode saluer permet d'afficher la phrase : "Bonjour, je m'appelle "nom de l'objet" et j'ai "age de l'ojet" ans.
        console.log("Bonjour, je m'appelle "+this.nom+ " et j'ai "+ this.age+ " ans.");
    }
}
// creation des objets p1 et p2
// pour recuperer l'age ou le nom de p1 faire la syntaxe : p1.age; p1.nom;
let p1 = new Personne("toto", 10); // il s'appelle toto et a 10 ans
// pour recuperer l'age ou le nom de p2 faire la syntaxe : p2.age; p2.nom;
let p2 = new Personne("titi", 9); // il s'appelle titi et a 9 ans
// pour appeler la methode saluer sur un des objets faire: p1.saluer();
p1.saluer(); // "Bonjour, je m'appelle toto et j'ai 10 ans."
p2.saluer(); // "Bonjour, je m'appelle titi et j'ai 9 ans."
console.log(p2.nom);