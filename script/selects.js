const trazCarros = async () =>{

    const response = await fetch('http://143.110.153.236:8080/cars/findAllCars')
    const carros = await response.json()
    const carrosSelect = document.getElementById("select")

    const selectCarros = carros

    selectCarros.forEach((cars) => {
        option = new Option(cars.Placa, cars.idCar);
        console.log(option);
        carrosSelect.options[carrosSelect.options.length] = option;
    });

}

const trazFunc = async () => {

    const response = await fetch("http://143.110.153.236:8080/funcionarios/findFuncionarios")
    const funcionarios = await response.json()
    const funcSelect = document.getElementById("nome")

    const selectFunc = funcionarios

    selectFunc.forEach((funcionarios) => {
        option = new Option(funcionarios.Nome, funcionarios.idFuncionario);
        funcSelect.options[funcSelect.options.length] = option;
    })
}

const trazFunc2 = async () => {

    const response = await fetch("http://143.110.153.236:8080/funcionarios/findFuncionarios")
    const funcionarios = await response.json()
    const funcSelect = document.getElementById("ajudante")

    const selectFunc = funcionarios

    selectFunc.forEach((funcionarios) => {
        option = new Option(funcionarios.Nome, funcionarios.idFuncionario);
        funcSelect.options[funcSelect.options.length] = option;
    })
}

window.onload = () => {
    
    trazCarros()
    trazFunc()
    trazFunc2()
    
    console.log('Iniciado')
}