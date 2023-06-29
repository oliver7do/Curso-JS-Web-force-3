function reverseWord(str) {
    let tab = str.split(''); // conversion de la chaine de caractere en tableau
    tab.reverse(); // inverser le tableau
    let chaine = tab.join(''); // convertir le tableau en chaine de caractere
    return chaine;
    // return str.split('').reverse().join('');
}

// console.log(reverseWord("Hello World!"));

function reverseArray(tab) {
    return tab.reverse(); // inverser le tableau et le retourner
}

function reverseWords(...words) {
    let resultat = []; // tableau vide 
    for (let i = 0; i < words.length; i++){
        // rempli le tableau resultat avec les valeurs inversees de chaque parametre
        resultat.push(reverseWord(words[i])); 
    }
    return resultat;
}
let res = reverseWords("bonjour", "le", "monde");
// console.log(res);

function phrase(tableau) {
    let resultat = reverseArray(reverseWords(...tableau)); 
    return resultat;
}

const words = [
    's.e.têrp', 'sap',
    "setê'n", 'suoV',
    'ces', 'redoc',
    'av', 'aç',
    'eénna', 'etteC'
];
console.log(phrase(words));