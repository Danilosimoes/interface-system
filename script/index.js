function postMethod( url, body) {
    console.log("Body = ", body);
    let request = new XMLHttpRequest()
    

    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    
    request.send(JSON.stringify(body))
    


    request.onload = function() {
        console.log(this.responseText)
    }


    return request.responseText
}



/*  Cadastro de funcionarios */ 

function cadastraFuncionario(){
    event.preventDefault();
    let url = "";
    let nome = document.getElementById("nomeFunc").value;
    let setor = document.getElementById("setor").value;
    console.log(nome);
    console.log(setor);

    body = {
        "nome": nome,
        "setor": setor
    }

    postMethod(url, body)

}

/**
 * Cadasto de carros
 */
function cadastraCarro(){
    event.preventDefault();
    /*let url = "localhost:3000/cars/cadastroCarro";*/
    let placa = document.getElementById("placa").value;
    let modelo = document.getElementById("modelo").value;
    let cor = document.getElementById("cor").value;

    body = {
        "License" : placa,
        "model" : modelo,
        "cor": cor
    }    
    
    let url = "http://143.110.153.236:8080/cars/cadastroCarro"
    console.log("Body = ", body);
    console.log(url)
    
    let xhr = new XMLHttpRequest()
    xhr.open('post', url, true)
    xhr.setRequestHeader("Content-type", "application/json;charset=UTF-8")
    xhr.send(JSON.stringify(body))
    
    


    xhr.onload = function() {
        console.log(this.responseText)
    }


    return xhr.responseText

}

/**
 * 
 * Inserindo a obra
 */
function postObras() {
    
    event.preventDefault();
    /*let url = "http://localhost:3000/obras/cadastro";*/
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
    let url = "http://143.110.153.236:8080/obras/cadastro"
    //let url = "http://localhost:8080/obras/cadastro"
    console.log("Body = ", body);
    console.log(url)
    
    let xhr = new XMLHttpRequest();
    xhr.open('post', url, true)
    xhr.setRequestHeader("Content-type", "application/json;charset=UTF-8")
    xhr.send(JSON.stringify(body))
    
    
    


    xhr.onload = function() {
        console.log(this.responseText)
    }


    return xhr.responseText
}


function finalizarObra(){
    event.preventDefault();
    let url = "";
    let idInstalacao = document.getElementById("instalacao").value;

    body = {
        "idInstalacao": idInstalacao
    }

    postMethod(url, body);
}


/**http://www.imranulhoque.com/javascript/javascript-beginners-select-a-dropdown-option-by-value/ 
 * 
 * https://stackoverflow.com/questions/10752055/cross-origin-requests-are-only-supported-for-http-error-when-loading-a-local
 * 
 * https://developer.mozilla.org/pt-BR/docs/Web/HTTP/CORS
 * */





