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
        listaElement.appendChild(itemElement);
    }
}

function AddTodo()
{
    var novoItem = inputElement.value;
    itens.push(novoItem);

    inputElement.value = '';

    CarregaItens();
}

buttonElement.onclick = function(){
    AddTodo();
}


CarregaItens();