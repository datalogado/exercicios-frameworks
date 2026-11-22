const adicionar = document.getElementById('adicionar');
const resetar = document.getElementById('resetar');
const input = document.getElementById('userInput');

adicionar.addEventListener("click", add);

function add(){
    if(input.value !== ''){
        let userText = document.createElement('li');
        userText.textContent = input.value; 

        let removeThisBtn = document.createElement('button');
        removeThisBtn.textContent = 'Deletar';
        removeThisBtn.classList.add('button');
        removeThisBtn.addEventListener("click", removeThis);

        userText.appendChild(removeThisBtn);
        document.getElementById('list').appendChild(userText);
        input.value = '';
    }

}

resetar.addEventListener("click", removeALL);

function removeThis(e){
    e.target.parentElement.remove();
}

function removeALL(){
    document.querySelectorAll('#list li').forEach(li => li.remove());
}

