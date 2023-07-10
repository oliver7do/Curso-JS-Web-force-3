function realiserRaffler() {
    const tableauResultat = document.getElementById('resultat');
    tableauResultat.innerHTML = '';

    const nombresTresores = [];

    while (nombresTresores.length < 5) {
        const nombreAleatoire = Math.floor(Math.random() * 49) + 1;

        if (!nombresTresores.includes(nombreAleatoire)) {
            nombresTresores.push(nombreAleatoire);
        }
    }

    nombresTresores.sort((a, b) => a - b);

    for (let i = 0; i < nombresTresores.length; i++) {
        const nombre = nombresTresores[i];
        const ligne = document.createElement('tr');
        const colonne = document.createElement('td');
        colonne.textContent = nombre;
        ligne.appendChild(colonne);
        tableauResultat.appendChild(ligne);
    }
}

// Chuva
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
