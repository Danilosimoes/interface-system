chamaCar = async (key) => {
    const response = await fetch("http://143.110.153.236:8080/cars/findAllCars")
    const carros = await response.json()
    const carrosSelect = document.getElementById(key)

    const selectCarros = carros

    selectCarros.forEach((cars) => {
        option = new Option(cars.Placa, cars.idCar);
        carrosSelect.options[carrosSelect.options.length] = option;
    });


    response.onload =  () => {

    }
}

chamaFunc = async (key) => {
    const response = await fetch("http://143.110.153.236:8080/funcionarios/findFuncionarios")
    const carros = await response.json()
    const carrosSelect = document.getElementById(key)

    const selectCarros = carros

    selectCarros.forEach((cars) => {
        option = new Option(cars.Nome, cars.idFuncionario);
        carrosSelect.options[carrosSelect.options.length] = option;
    });


    response.onload =  () => {

    }

    
}

chamaCar("select");

chamaFunc("nome");

chamaFunc("ajudante");

chamaFunc("ajudante1");

chamaFunc("ajudante2");

chamaFunc("ajudante3");


