/**
 * Diferncia de encadenar promesas y ponerlo con async await
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

function procesarPedido(respuesta){
    return new Promise(resolve =>{
        console.log('Procesando respuesta...');
        console.log(`La respuesta fue: "${respuesta}"`);
        resolve('Gracias por su compra');
    });
 }

/**
 * Es un metodo mas corto de hacer las funciones asincronas
 * 
 *  - Ponemos ASYNC delante de una función, e inmediatamente
 * esa función se combierte en asincrona y retorna una promesa
 * 
 * - Con AWAIT delante del metodo asincrono le decimos que espere hasta 
 * que el proceso del metodo asincrono espere hasta que finalice.
 * osea en este caso hasta que ordenarProducto no finalice no puede seguir 
 * con las siguentes tareas como procesarPedido.
 * 
 * Esto se hace ya que procesarPedido necesita un dato que se realiza con 
 * ordenarProducto y si se empieza a ejecutar sin tener ese dato daría error.
 * En ese caso nos interesa que pase de asincrono a sincrono para que no nos de 
 * error en la ejecución.
 * 
 * Estos dos siempre se usan juntos(async y await)
 */

async function realizarPedido(producto){
    try { 
        const respuesta = await ordenarProducto(producto); //esperar a que se procese
        console.log('Respuesta recibida');
        const respustaProcesada = await procesarPedido(respuesta); //esperar a que se procese
        console.log(respustaProcesada);
    } catch (error) {
        console.log(error);
    }
}
/*
    Si no esperamos en los dos metodos se empezará  a ejecutar dando resultado 
    erroneos.
    
    De esta manera es mas corta y precisa que ir encadenando promesas con .then
*/

realizarPedido('taza');

/**
 * Explicación del proceso
 * 
 * Llamamos al metodo realizarPedido y le pasamos el parametro 'taza' (que si existe)
 * dentro del metodo llama a otro metodo: ordenarProducto y le pasamos el producto (taza)
 * este lo tenemos en await (que se espera hasta que finalize el proceso).
 * 
 * Despues llamamos a otro metod procesarPedido pasandole la respuesta del anterior metodo.
 * También le poenemos un await para que no ejecute las siguientes lineas de codigo hasta que no termine
 * el metodo. 
 * Una vez terminado mostramos la respuesta.
 * 
 * Si ocurre un error es capturado con un try catch y mostrado por consola.
 */