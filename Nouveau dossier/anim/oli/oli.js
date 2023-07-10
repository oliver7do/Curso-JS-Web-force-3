// const rotatingWord = document.getElementById('rotating-word');

// function animateRotation() {
//     rotatingWord.style.transform = 'rotate(0deg)';
//     rotatingWord.style.transition = 'transform 5s linear';

//     setTimeout(() => {
//         rotatingWord.style.transform = 'rotate(360deg)';
//     }, 100);

//     setTimeout(animateRotation, 5000);
// }

// animateRotation();


// Segunda tentativa

// const rotatingWord = document.getElementById('rotating-word');
// let rotationAngle = 0;

// function animateRotation() {
//     rotationAngle += 1;
//     rotatingWord.style.transform = `rotate(${rotationAngle}deg)`;
//     requestAnimationFrame(animateRotation);
// }

// animateRotation();

// Terceira tentativa

// Cria um elemento <div> para representar uma gota de chuva
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

