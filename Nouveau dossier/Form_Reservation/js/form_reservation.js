let plat = $("#plat");
let dessert = $("#dessert");
let ht = $("#ht");
let ttc = $("#ttc");


plat.on('change', () =>{
    var platChoix = plat.val();
    var prixplat = 0;
    var dessertChoix = dessert.val();
    var prixDessert = 0;

    switch(platChoix){ // $("#plat").val()
        case "Thiebou":
            prixplat = 15;
            break;
        case "Salade":
            prixplat = 12;
            break;
        case "Sushi":
            prixplat = 11;
            break;
        case "Filets":
            prixplat = 9;
            break;
        default:
            prixplat = 0;
            break;
    }

    if(dessertChoix == "Churros"){ // $("#dessert").val()
        prixDessert = 15;
    }
    else if(dessertChoix == "Biscuits"){
        prixDessert = 12;
    }
    else if(dessertChoix == "Buche"){
        prixDessert = 11;
    }
    else if(dessertChoix == "Gateau"){
        prixDessert = 9;
    }else{
        prixDessert = 0;
    }

    calculPrix(prixplat, prixDessert);
    
});

dessert.on('change', () =>{
    var platChoix = plat.val();
    var prixplat = 0;

    var dessertChoix = dessert.val();
    var prixDessert = 0;

    switch(platChoix){
        case "Thiebou":
            prixplat = 15;
            break;
        case "Salade":
            prixplat = 12;
            break;
        case "Sushi":
            prixplat = 11;
            break;
        case "Filets":
            prixplat = 9;
            break;
        default:
            prixplat = 0;
            break;
    }

    if(dessertChoix == "Churros"){
        prixDessert = 15;
    }
    else if(dessertChoix == "Biscuits"){
        prixDessert = 12;
    }
    else if(dessertChoix == "Buche"){
        prixDessert = 11;
    }
    else if(dessertChoix == "Gateau"){
        prixDessert = 9;
    }else{
        prixDessert = 0;
    }

    calculPrix(prixplat, prixDessert);
    
});

//CHAT 
// var plat = $("#plat").get(0);
// var childNode = $(plat).children().eq(1);

// var enfantsPlat = plat.children().eq(1)
var enfantsPlat = plat.children(); // au lieu de childNode

var thieb = 15;

// Prix HT + Montant TVA = Prix TTC
// Prix HT = Prix TTC ÷ (1 + Taux de TVA)



function calculPrix (tarifPlat, tarifDessert){
    var PrixHT = Number(tarifPlat) + Number(tarifDessert);
    var prixTTC = PrixHT * 1.2 ;
    prixTTC = prixTTC.toFixed(2);
    console.log(PrixHT, prixTTC);

    ht.val(PrixHT);
    ttc.val(prixTTC);
}

// chuva
function createRaindrop() {
    const raindrop = document.createElement('div');
    raindrop.className = 'raindrop';
    raindrop.style.left = `${Math.random() * 100}%`;
    raindrop.style.animationDuration = `${Math.random() * 2 + 1}s`;
    document.body.appendChild(raindrop);
}

// Cria várias gotas de chuva em intervalos regulares
function createRain() {
    setInterval(createRaindrop, 200);
}

// Inicia a animação da chuva
createRain();
