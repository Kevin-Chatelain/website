let lune = document.querySelector('.mode-nuit>svg:nth-child(1)');
let soleil = document.querySelector('.mode-nuit>svg:nth-child(2)');

lune.addEventListener('click', () => {
    document.body.classList.remove('jour');
    document.body.classList.add('nuit');
    lune.classList.add('hidden');
    soleil.classList.remove('hidden');
})

soleil.addEventListener('click', () => {
    document.body.classList.remove('nuit');
    document.body.classList.add('jour');
    lune.classList.remove('hidden');
    soleil.classList.add('hidden');
})

