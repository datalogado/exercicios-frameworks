const element = document.getElementsByClassName('texto');
const button = document.getElementById('btn');
const button2 = document.getElementById('duplicar');
const btnRemove = document.getElementById('btnRemove');

button.addEventListener('click', function(){
    for(let i = 0; i < element.length; i++){
        element[i].classList.toggle('red');
    }
});

button2.addEventListener('click', function(){
    const novoElemento = document.createElement('p');
    novoElemento.textContent = 'Texto genérico criado atoa';
    novoElemento.classList.add('texto', 'copia');
    document.body.appendChild(novoElemento);
})

btnRemove.addEventListener('click', function(){
    const copias = document.getElementsByClassName('copia');

    while(copias.length > 0){
        copias[0].remove();
    }
})