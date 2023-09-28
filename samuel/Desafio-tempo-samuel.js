//Pegamos o elemento do input cidade
const cidade = document.querySelector('#city');

//Pegamos o elemento do input button buscar 
const data = document.querySelector('#buscar');

// botao.addEventListener('click', function(e) {
cep.addEventListener('blur', function (e) {
    let search = city.value;
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`https://api.hgbrasil.com/weather?format=json-cors&key=faea7b62&city_name=${search}`, options)

        .then(function (response) {
            response.json()
                .then(function (data) {
                    console.log(data);
                    meu_callback(data);
                })
        })
        .catch(function (e) {
            console.log('Error:' + e.message);
        })

    //console.log(search);

    const showData = function (result) {
        for (const campo in result) {
            if (document.querySelector('#' + campo)) {
                document.querySelector('#' + campo).value = result[campo]
                console.log(campo);
            }
        }
    }

        else {
        //CEP não Encontrado.
        limpa_formulário_cep();
        alert("CEP não encontrado.");
    }
}

})

//  //função para verificar e alimentar os campos
// const showData = function(result) {
//  //o for in para tratarmos o objeto, o for in pega o resultado (result) e insere na variáviel campo
//     for(const campo in result) {
//         //nesse if verifico dinamicamente se todos os campos da api eu utilizo nos inputs
//         if (document.querySelector('#'+campo)){
//             //Pegamos dinamicamente o elemento dos inputs e passamos o value dinamicamente, dizendo q o result é um array
//             //e passamos o value dinamicamente, dizendo que o result é um array e passando a variável campo como posição
//             document.querySelector('#'+campo).value = result[campo]
//             console.log(campo);


//         }
//     }
// }