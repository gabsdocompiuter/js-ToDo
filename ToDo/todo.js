var divListaElement = document.getElementById('lista');
var inputElement    = document.getElementById('novoItem');
var buttonElement   = document.getElementById('submit');

var itens =
[
    
];

function CarregaItens()
{
    divListaElement.innerHTML = '';

    if(itens.length == 0)
    {

        var msgElement = document.createElement('p');
        var msgText = document.createTextNode('Você não tem itens na lista!');
        
        msgElement.appendChild(msgText);
        divListaElement.appendChild(msgElement);
        //return;
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

function AddItem()
{
    var novoItem = inputElement.value;
    itens.push(novoItem);

    inputElement.value = '';

    CarregaItens();
}

function RemoveItem(pos)
{
    itens.splice(pos, 1);

    CarregaItens();
}

buttonElement.onclick = function()
{
    AddItem();
}


CarregaItens();