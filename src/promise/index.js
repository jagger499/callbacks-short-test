//promesa que se ejecuta validando el if
const sometimesWillHappen = () =>{
    return new Promise((resolve, reject) => {
        if(true){
            resolve('Hey');
        }else{
            reject('Douh!')
        }
    })
} 

//ejecutando la promesa haciendo un console.log de la respuesta o el error
sometimesWillHappen()
    .then(response => console.log(response))
    .catch(error => console.error(error))


//promesa que se ejecuta validando el if si se valida tiene un tiempo de 3s para entregar la respuesta
const sometimesWillHappen2 = () => {
    return new Promise((resolve,reject)=>{
        if(true){
           setTimeout(() => {
            resolve('casi')
           }, 3000); 
        }else{
            const error = new error('nooooo');
            reject('error');
        }
    })
}

//ejecutando la promesa haciendo un console.log de la respuesta o el error
sometimesWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.error(err))


//ejecutando las dos promesas de forma simultanea y haciendo un console.log de sus respuestas
Promise.all([sometimesWillHappen(),sometimesWillHappen2()])
    .then(response => {
        console.log("results array: "+ response)
    })
    .catch(err =>{
        console.error(err);
    })