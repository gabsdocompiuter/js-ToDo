var request = function ()
{
    return new Promise(function(resolve, reject)
    {
        var url = 'https://api.github.com/users/gmonteeeiro';
        var req = new XMLHttpRequest();

        req.open('GET', url);
        req.send(null);

        req.onreadystatechange = function()
        {
            if(req.readyState == 4)
            {
                if(req.status == 200)
                {
                    resolve(JSON.parse(req.responseText));
                }
                else
                {
                    reject('Houve um erro na solicitação');
                }
            }
        }
    });
}

request()
    .then(function(response)
    {
        console.log(response);
    })
    .catch(function(error)
    {
        console.warn(error);
    })