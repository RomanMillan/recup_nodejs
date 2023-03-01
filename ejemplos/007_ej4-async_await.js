/**
 * ASYNC AWAIT
 * 
 */

/**
 * Vamos a simular una empresa virtual y queremos ordenar un producto
 */
 function ordenarProducto(producto){
    return new Promise((resolve,reject)=>{
        console.log(`Ordenando: ${producto}`);
        if(producto === 'taza'){
            resolve('Ordenando una taza');
        }else{
            reject('Producto no disponible actualmente');
        }
    });
}
/**
 * NO hace falta usar siempre reject, si queremos podemos omitirlo.
 * Y en funciones flechas si el parametro es uno solo no hace falta rodearlo
 * con parentesis.
 */
 function procesarPedido(respuesta){
    return new Promise(resolve =>{
        console.log('Procesando respuesta...');
        console.log(`La respuesta fue: "${respuesta}"`);
        resolve('Gracias por su compra');
    });
 }

 /**
  * Cuando llamemos al metodo ordenarProducto retornará una promesa
  * y en .then llamamos al metodo procesarPedido que tambien devuelve otra
  * promesa la cual tenemos que "capturar" con otro .then para procesar esa 
  * información.
  * 
  * A esta forma se le llama cadena de promesas (chaining promise), ya que se está encadenando una
  * promesa con otra promesa
  */
 ordenarProducto('taza')
    .then(respuesta =>{
        console.log('Respuesta recibida');
        return procesarPedido(respuesta);
    })
    .catch(error=>{
        console.log(error)
    })



