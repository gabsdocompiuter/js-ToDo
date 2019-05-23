var listaElement  = document.getElementById('lista');
var inputElement  = document.getElementById('novoItem');
var buttonElement = document.getElementById('submit');

var itens =
[
    'Coisa 1',
    'Coisa 2',
    'Coisa 3'
];

function CarregaItens()
{
    listaElement.innerHTML = '';

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


        listaElement.appendChild(itemElement);
    }
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