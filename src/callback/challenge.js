let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let API = 'https://rickandmortyapi.com/api/character/';


//funcion para obtener los datos usando xmlhttprequest parametros url de la api y callback function
function fetchData(url_api , callback){

    //asigno un shortcut a xmlhttprequest
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET',url_api ,true);

    //si esta listo
    xhttp.onreadystatechange = function (event){
        if(xhttp.readyState === 4){

            //si la respuesta fue un codigo 200
            if(xhttp.status === 200){
                callback(null, JSON.parse(xhttp.responseText));

            // si hubo un error    
            }else{
                const error = new Error('error '+ url_api)
                return callback(error, null)
            }
        }
    }
    xhttp.send();
}



//llamado a la funcion fetchData para obtener a todos los personajes de rick y morty
fetchData(API, function(error1, data1){
    if(error1) console.error(error1);

    // llamando a la funcion fetchData para obtener al personaje en posicion 0
    fetchData(API + data1.results[0].id, function (error2, data2){
        if(error2) console.error(error2);

        //obteniendo la dimension del personaje en posicion traido en el anterior fetchData
        fetchData(data2.origin.url, function(error3, data3){
            if(error3) console.error(error3);
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        })
    })
})