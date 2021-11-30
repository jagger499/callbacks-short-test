// declaro la promesa que voy a llamar de manera asincrona
const doSomethingAsync = () =>{
    return new Promise((resolve,reject)=>{
        (true)?
            setTimeout(() => {
                resolve('wooooo i do something async')
            }, 3000):
            reject(new Error('Test Error'))

    })
}

//declaro la funcion asincrona que ejecuta la promesa de manera asincrona pero con nulo control de errores
const doSomething = async () =>{
    const something = await doSomethingAsync();
    console.log(something);
}

//ejecuto la funcion doSomething que llama la promesa de manera asincrona
doSomething();


//declaro la funcion asincrona que ejecuta la promesa de manera asincrona pero con control de errores
//usando un try catch
const anotherFun = async () =>{
    try{
        const something = await doSomethingAsync();
        consoñe.log(something);
    }catch(error){
        console.error(error);
    }
}


//ejecuto la funcion anotherFun que ejecuta la promesa de manera asincrona con control de
//errores con un try catch
anotherFun();