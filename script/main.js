/*console.log('foi');

function fazGet (url){

    let request = new XMLHttpRequest();
    request.open("GET", url, true);
    
    return request.responseText

    



};


function criaLinha(usuario){


}

function findDados(){
    url = "http://143.110.153.236:8080/obras/findAll"
    data = fazGet(url)
    usuarios = JSON.stringify(data);
    
    request.send(request);
    console.log(usuarios);
    

}

//findDados()*/


const trazObras = async () => {

    const response = await fetch('http://143.110.153.236:8080/obras/findAll')
    const dados = await response.json()
    console.log(dados)
    
    
   dados.forEach(element => {

        const containerObraElement = document.getElementById('container-obras')

        const template = document.getElementById('obra-template')

        const obraElement = document.importNode(template.content , true)

        const itens_obras = obraElement.querySelectorAll('span')

        itens_obras[0].innerText = element.nome
        itens_obras[1].innerText = element.modelo
        itens_obras[2].innerText = element.pedido
        itens_obras[3].innerText = element.saida
        itens_obras[4].innerText = element.url.url
   
    
        containerObraElement.append(obraElement)
       


    })
}

const trazCarros = async () =>{

    const response = await fetch('http://143.110.153.236:8080/cars/findAllCars')
    const dados = await response.json()
    console.log(dados)

}



window.onload = () => {
    trazObras()
    
    console.log('Iniciado')
}
