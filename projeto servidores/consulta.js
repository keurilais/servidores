var dataRef = new Firebase('https://hospital-789c5-default-rtdb.firebaseio.com/');

dataRef.on('value', function(snapshot) {

    var t = snapshot.val();
    var count = 0;

    for (var key in t) {
        var valor = t[key];

        console.log('chave', key);
        console.log('valor', valor);

        if(key === 'exames') {

            var _itemsKey = Object.entries(valor);
    
            count++;
    
    
            for (const [key2, value2] of _itemsKey) {
    
                $("#tbExames tbody").append(
    
                    `<tr> +
    
                        <th scope="row">${count}</th> +
    
                        <td>${value2.exame}</td> +
    
                        <td>${value2.valor}</td> +

    
                    </tr>`
    
                );
    
            }
        }

        if(key === 'especialistas') {

            var _itemsKey = Object.entries(valor);
    
            count++;
    
    
            for (const [key2, value2] of _itemsKey) {
    
                $("#tbEspecialistas tbody").append(
    
                    `<tr> +
    
                        <th scope="row">${count}</th> +
    
                        <td>${value2.medico}</td> +
    
                        <td>${value2.especialidade}</td> +

    
                    </tr>`
    
                );
    
            }
        }


    }

});
