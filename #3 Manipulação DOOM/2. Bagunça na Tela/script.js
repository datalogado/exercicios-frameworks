const cores = ['red', 'yellow', 'pink', 'blue', "orange", 'purple', 'magenta', 'cyan', 'green'];

function criarBolinha(){
    const bola = document.createElement('div');
    bola.classList.add('bola')
    bola.style.backgroundColor = cores[Math.floor(Math.random() * cores.length)]
    bola.style.left = Math.random() * window.innerWidth + 'px';
    bola.style.top = Math.random() * window.innerHeight + 'px';
    bola.style.height = Math.random() * 350 + 'px';
    bola.style.width = bola.style.height;
    document.body.appendChild(bola);
}

function limpar(){
    document.querySelectorAll('.bola').forEach(bola => bola.remove())
}