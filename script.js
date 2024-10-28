function showButton2() {
    document.getElementById('button1').style.display = 'none'; // Esconder o primeiro botão
    let button2 = document.createElement('button');
    button2.innerHTML = 'Está curiosa? Aperte-me de novo';
    button2.onclick = showButton3;
    document.body.appendChild(button2);
}

function showButton3() {
    let button2 = document.querySelector('button:last-child'); // Seleciona o último botão
    button2.style.display = 'none'; // Esconder o segundo botão
    let button3 = document.createElement('button');
    button3.innerHTML = 'Esse é o último, prometo! Aperte-me';
    button3.onclick = showFinalMessage;
    document.body.appendChild(button3);
}

function showFinalMessage() {
    let button3 = document.querySelector('button:last-child'); // Seleciona o último botão
    button3.style.display = 'none'; // Esconder o terceiro botão
    document.getElementById('message').innerHTML = 'Você merece todo o amor e felicidade do mundo! 🎊'; // Mensagem final
    let photo = document.getElementById('photo');
    photo.style.display = 'block'; // Mostrar a imagem
    photo.style.opacity = 0; // Iniciar com a imagem invisível
    setTimeout(() => {
        photo.style.opacity = 1; // Apresentar a imagem com efeito
    }, 100);
}
