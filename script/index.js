// função para realizar os requsts
function reqFunction( method, url, body) {
    console.log("Body = ", body);
    
    let xhr = new XMLHttpRequest()
    xhr.open(method, url, true)
    xhr.setRequestHeader("Content-type", "application/json;charset=UTF-8")
    xhr.send(JSON.stringify(body))
    
    xhr.onload = function() {
        console.log(xhr.statusText)
        if(xhr.statusText == 'Not Found'){
            alert('Não encontrado')

        }
        if(xhr.statusText == 'Created') {
            alert(xhr.response)
        }
        if(xhr.statusText == 'Accepted'){
            alert(xhr.response)
        }
    }


    return xhr.responseText
}


function cadastraFuncionario(){
    
    event.preventDefault();
    let method = 'post';
    let url = "http://143.110.153.236:8080/funcionarios/cadastrarFuncionario"
    let nome = document.getElementById("nomefunc").value;
    let setor = document.getElementById("setor").value;
    console.log(nome);
    console.log(setor);

    body = {
        "nome": nome,
        "setor": setor
    }

    reqFunction(method, url,body)

    


}

/**
 * Cadasto de carros
 */
function cadastraCarro(){
    event.preventDefault();
    let method = 'post'
    let url = "http://143.110.153.236:8080/cars/cadastrar"
    let placa = document.getElementById("placa").value;
    let modelo = document.getElementById("modelo").value;
    let cor = document.getElementById("cor").value;

    body = {
        "License" : placa,
        "model" : modelo,
        "cor": cor
    }    
    
    reqFunction(method, url, body)
}

/**
 * 
 * Inserindo a obra
 */
function postObras() {
    
    event.preventDefault();
    let method = 'post'
    let url = "http://143.110.153.236:8080/obras/cadastro";
    let idInstalador = document.getElementById("nome").value;
    let idAjudante = document.getElementById("ajudante").value;
    let idAjudante1 = document.getElementById("ajudante1").value;
    let idAjudante2 = document.getElementById("ajudante2").value;
    let idAjudante3 = document.getElementById("ajudante3").value;
    let idCarro = document.getElementById("select").value;
    let nPedido = document.getElementById("pedido").value;
    let descricao = document.getElementById("descricao").value;
 
    body = {
        "idFuncionario": idInstalador,
        "Funcionario2": idAjudante,
        "Funcionario3": idAjudante1,
        "Funcionario4": idAjudante2,
        "Funcionario5": idAjudante3,
        "nPedido": nPedido,
        "idCar": idCarro,
        "descricao": descricao
          
    }
    reqFunction(method, url, body)
    
    

}


function finalizarObra(){
    event.preventDefault();
    let method = 'put'
    let url = "http://143.110.153.236:8080/obras/atualizar";
    let idInstalacao = document.getElementById("idInstalacao").value;

    body = {
        "idInstalacao": idInstalacao
    }

    reqFunction(method, url, body);
}


/**http://www.imranulhoque.com/javascript/javascript-beginners-select-a-dropdown-option-by-value/ 
 * 
 * https://stackoverflow.com/questions/10752055/cross-origin-requests-are-only-supported-for-http-error-when-loading-a-local
 * 
 * https://developer.mozilla.org/pt-BR/docs/Web/HTTP/CORS
 * */





