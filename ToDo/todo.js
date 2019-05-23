var divListaElement = document.getElementById('lista');
var inputElement    = document.getElementById('novoItem');
var buttonElement   = document.getElementById('submit');

var itens = JSON.parse(localStorage.getItem('ToDoItens')) || [];

function carregaItens()
{
    divListaElement.innerHTML = '';

    if(itens.length == 0)
    {
        var msgElement = document.createElement('p');
        var msgText = document.createTextNode('Você não tem itens na lista!');
        
        msgElement.appendChild(msgText);
        divListaElement.appendChild(msgElement);
    }

    var ulElement = document.createElement('ul');
    ulElement.setAttribute('id', 'lista');
    
    for(item of itens)
    {
        var itemElement = document.createElement('li');
        var itemText = document.createTextNode(item);
        itemElement.appendChild(itemText);
        
        var excluirElement = document.createElement('a');
        var excluirText = document.createTextNode('Excluir');
        excluirElement.setAttribute('href', '#');

        pos = itens.indexOf(item);
        excluirElement.setAttribute('onclick',  'RemoveItem(' + pos + ')')

        excluirElement.appendChild(excluirText);
        itemElement.appendChild(excluirElement);

        
        ulElement.appendChild(itemElement);
    }

    divListaElement.appendChild(ulElement);
}

function addItem()
{
    var novoItem = inputElement.value;

    //Verifica se escreveu algo no input
    if(novoItem == '')
    {
        alert('Você precisa informar uma descrição para o item');
        return;
    }

    //Verifica se lista já contém item igual
    if(itens.indexOf(novoItem) != -1)
    {
        inputElement.value = '';
        return;
    }

    itens.push(novoItem);

    inputElement.value = '';

    carregaItens();
    saveIntoStorage()
}

function removeItem(pos)
{
    itens.splice(pos, 1);

    carregaItens();
    saveIntoStorage()
}

function saveIntoStorage(){
    var jsonItens = JSON.stringify(itens);

    localStorage.setItem('ToDoItens', jsonItens);
}

buttonElement.onclick = function()
{
    addItem();
}


carregaItens();