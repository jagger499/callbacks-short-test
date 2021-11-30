let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;


//funcion para obtener los datos usando xmlhttprequest parametros url de la api y callback function
const fetchData = (url_api) =>{
    return new Promise((resolve, reject) => {
            //asigno un shortcut a xmlhttprequest
            const xhttp = new XMLHttpRequest();
            xhttp.open('GET',url_api ,true);

            //si esta listo
            xhttp.onreadystatechange = ((event) => {
                if(xhttp.readyState === 4){
                
                    //si la respuesta fue un codigo 200
                    if(xhttp.status === 200){
                        resolve(JSON.parse(xhttp.responseText));
                    
                    // si hubo un error    
                    }else{
                        reject(new Error('Error'+ url_api));
                    }
                }
            })
            xhttp.send();
    })
}

module.exports = fetchData;