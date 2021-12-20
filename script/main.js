const trazObras = async () => {

    const response = await fetch('http://143.110.153.236:8080/obras/aberto/emAberto')
    const dados = await response.json()
    console.log(dados)
    
    
   dados.forEach(element => {

        const containerObraElement = document.getElementById('container-obras')

        const template = document.getElementById('obra-template')

        const obraElement = document.importNode(template.content , true)

        const itens_obras = obraElement.querySelectorAll('span')

        itens_obras[0].innerText = element.nome
        itens_obras[1].innerText = element.placa
        itens_obras[2].innerText = element.pedido
        itens_obras[3].innerText = element.saida
        itens_obras[4].innerText = element.instalacao
   
    
        containerObraElement.append(obraElement)
       


    })
    
}
window.onload = () => {
    trazObras()
    
    
    console.log('Iniciado')
}
