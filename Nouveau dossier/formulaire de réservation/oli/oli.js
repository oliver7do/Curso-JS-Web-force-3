
document.getElementById("confirmBtn").addEventListener("click", function() {
    var platPrice = 0;
    var dessertPrice = 0;

    var platSelect = document.getElementById("platType");
    var dessertSelect = document.getElementById("dessertType");
    var conditionsCheckbox = document.getElementById("conditions");

    var platValue = platSelect.value;
    var dessertValue = dessertSelect.value;

    // Calcul du prix HT
    switch (platValue) {
        case "thiebouDieune":
            platPrice = 15;
            break;
        case "saladeQuinoa":
            platPrice = 12;
            break;
        case "sushiBurger":
            platPrice = 11;
            break;
        case "filetsPoulet":
            platPrice = 9;
            break;
    }

    switch (dessertValue) {
        case "churrosMaison":
            dessertPrice = 15;
            break;
        case "biscuitsPepites":
            dessertPrice = 12;
            break;
        case "bucheNoel":
            dessertPrice = 11;
            break;
        case "gateauFromage":
            dessertPrice = 9;
            break;
    }

    // Calcul du total HT et du total TTC
    var totalHT = platPrice + dessertPrice;
    var totalTTC = totalHT * 1.2;

    document.getElementById("totalHT").value = totalHT + " €";
    document.getElementById("totalTTC").value = totalTTC + " €";

    // Vérification de l'acceptation des conditions générales
    if (conditionsCheckbox.checked) {
        document.getElementById("submitBtn").disabled = false;
        document.getElementById("message").textContent = "";
    } else {
        document.getElementById("submitBtn").disabled = true;
        document.getElementById("message").textContent = "J'accepte les conditions générales";
        document.getElementById("message").classList.add("error");
    }
});

document.getElementById("reservationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("message").textContent = "Commande envoyée dans l'emplacement prévu";
});

document.getElementById("conditions").addEventListener("change", function() {
    if (this.checked) {
        document.getElementById("message").textContent = "";
        document.getElementById("message").classList.remove("error");
    } else {
        document.getElementById("message").textContent = "J'accepte les conditions générales";
        document.getElementById("message").classList.add("error");
    }
});