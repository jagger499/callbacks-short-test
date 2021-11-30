let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

//funcion para obtener los datos usando xmlhttprequest parametros url de la api y callback function
function fetchData(url_api , callback){

    //asigno un shortcut a xmlhttprequest
    let xhttp = new XMLHttpRequest;
    xhttp.open('GET',url_api ,true);

    //si esta listo
    xhttp.readystatechange = function (event){
        if(xhttp.readyState === 4){

            //si la respuesta fue un codigo 200
            if(xhttp.status === 200){
                callback(null, JSON.parse(xhttp.responseText));
            }else{
                const error = new Error('error '+ url_api)
                return callback(error, null)
            }
        }
    }
    xhttp.send();
}