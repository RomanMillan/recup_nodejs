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

/*
    Creamos los dos metodos para captar un mensaje.
    Cuando llamemos al metodo este devolvoverá una de las dos opciones (resolve, reject)
    y esto tiene que ser captado con un .then y guardado en uno de estas constantes.
    
    Es "obligatorio" hacer esto para que si nos de una de las dos opciones y no nos salte
    un error. ya que si la opción fuese rechazada, no lo captaría y nos petaria el programa. 
*/
const manejarPedido = (mensajeRes)=>{
    console.log(mensajeRes);
};

const rechazarPedido = (mensajeRej)=>{
    console.log(mensajeRej);
};


/**
 * LLamamos al metodo miPedido creado anteriormente y usuamos un .then
 * para manejar si es aceptado o rechazado.
 */
miPedido.then(manejarPedido, rechazarPedido);
