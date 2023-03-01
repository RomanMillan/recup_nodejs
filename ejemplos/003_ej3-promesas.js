// PROMESAS EN JAVASCRIPT (ASINCRONO)
/*
Una promesa es un objeto de JS, que representa el eventual resultado
(o error) de una operación asíncrona.
Cuando se ejecuta una operación asincrona no se puede saber 
cuando ni como va a terminar (hasta que no se complete el proceso).
El servidor puede ir lento, o la base de datos, etc

La promesa una vez creada toma el estado pending(pendiente) y 
una vez pasado el tiempo terminará en uno de estos dos estado:
- Fulfilled (cumplida) 
- Rejected (Rechazada)

El objeto de una promesa se asocia a una funcion callback
Esta función se ejecuta una vez se completa el proceso asincrono
para procesar el resultado.
callback puede ser definida como: "Función que se pasa a otra funcion
como argumento y luego se ejecuta dentro de la funcion externa"

ej: F y H son dos funciones;
    Se puede pasar la funcion F como argumento a H y
    dentro de H llamar a F una vez terminado el proceso

las promesas tienen un método .then() el cual podemos 
decidir que ocurre cuando se completa la promesa (exito o error)

 */


const promesaCumplida = false;

const miPromesa = new Promise((resolve, reject )=> {
    if(promesaCumplida){
        resolve('Promesa cumplida');
    }else{
        reject('Promesa rechazada')
    }
})

/*
    valor es el valor que le pasamos en resolve 
    si es rechazada (reject) dará un error ya que no será cogido en valor


    miPromesa.then((valor)=>{
        console.log(valor)
    })

*/

/*
    De esta manera .then en la primera opción es la promesa cumplida (resolve)
    y la segunda es rechazada (reject).
    Dependiendo de cual sea la respuesta es la que será mostrada. 
    
 */

const cumplida = (cumplimiento) => {
    console.log(cumplimiento)
}

const rechazada = (rechazo) => {
    console.log(rechazo)
}

miPromesa.then(cumplida, rechazada)