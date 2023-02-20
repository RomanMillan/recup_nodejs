/**
 * .catch()
 * Método de promesa que solo se ejecuta si la 
 * promesa es rechazada.
 */

/*
    Creamos un metodo que genere de forma aleatoria si 
    el pedido es aceptado o rechazado. Nos devuelve un true o false

*/
const estatusPedido =()=>{
    const estatus = Math.random() < 0.5;
    console.log(estatus);
    return estatus;
};

/*
    Creamos una promesa que llame al metodo anterior y 
    nos devuelva un resolve o un reject y decidir que hacer en 
    cada situación.
*/
const miPedido = new Promise((resolve, reject)=>{
    if(estatusPedido()){
       resolve("Su pedido está en camino");
    }else{
        reject("Su pedido ha sido rechazado");
    }
});

/**
 * La unica diferencia con el anterior ejemplo es que no 
 * manejamos el metodo miPedido con dos .then, sino que para los errores
 * o rechazos reservamos el .catch(), siendo mas optimo ya que solo 
 * se ejecuta si la petición es rechazada y no como en el anterior
 * (los 2 .then) que se ejecutan si o si los dos.
 * si el .then no ocurre llama al .catch
 * 
 * .then solo lo usaremos para manejar el exito de la promesa y 
 * catch el rechazo.
 */
miPedido
    .then((mensajeRes)=>{
        console.log(mensajeRes);
    })
    .catch((mensajeRej)=>{
        console.log(mensajeRej);
    })