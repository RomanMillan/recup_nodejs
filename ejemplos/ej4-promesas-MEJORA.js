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
 * De esta forma compactamos los dos pasos anteriores en uno solo
 * siendo mas claro de comprender.
 * 
 * LLamamos a la función y con dos .then manejamos las respuestas.
 * La 1ª es para las respuestas aceptadas
 * La 2ª es para las rechazadas. (ponemos null , ya que no nos devuelve
 * ninguna respuesta a ser rechazada)
 * 
 * A esta forma de encadenar metodos se le llama "Method Chaining"
 * esto es posible ya que .then retorna una promesa, si el primer then no
 * ocurre llama al siguente y así sucesivamente.
 */
miPedido
    .then((mensajeRes)=>{
        console.log(mensajeRes);
    })
    .then(null,(mensajeRej)=>{
        console.log(mensajeRej);
    });