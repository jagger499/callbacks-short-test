const fetchData = require("../utils/fetchData");
let API = 'https://rickandmortyapi.com/api/character/';

//utilizando a fetchData y trayendo mediante un get todos los personajes
fetchData(API)
    .then(data => {

        //log de todos los registros traidos
        console.log(data.info.count)

        //cambia el response consumiendo la api en obtener personaje por id 
        // https://rickandmortyapi.com/api/character/${id}
        return fetchData(`${API}${data.results[0].id}`)
    })
    .then(data =>{

        //toma el personaje retornado por el anterior return e imprime su nombre
        console.log(data.name)

        //consume el api para obtener una serie de datos en los cuales esta la dimension
        return fetchData(data.origin.url)
    })
    .then(data => {
        
        //log de la dimension del personaje obtenido del consumo de la api anterior
        console.log(data.dimension)
    })
    .catch(err => console.error(err))