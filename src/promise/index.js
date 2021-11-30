const sometimesWillHappen = () =>{
    return new Promise((resolve, reject) => {
        if(true){
            resolve('Hey');
        }else{
            reject('Douh!')
        }
    })
} 

sometimesWillHappen()
    .then(response => console.log(response))
    .catch(error => console.error(error))


const sometimesWillHappen2 = () => {
    return new Promise((resolve,reject)=>{
        if(true){
           setTimeout(() => {
            resolve('hey')
           }, 3000); 
        }else{
            const error = new error('nooooo')
            reject('error')
        }
    })
}

sometimesWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.error(err))