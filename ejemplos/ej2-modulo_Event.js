// importamos EventEmitter  de envents (ya está en node.js)
const EnventEmitter = require('events');

// creamos una constante para usarla
const emisorProductos = new EnventEmitter();

// usamos la funcion .on para para ejecutar la funcion
// que hayamos programado. Esta función tiene que tener un
// nombre identificador y realizará algo.
// A estás funciones se les denominas Event Handlers (Eventos que están esperando
// que las llamen u ocurra el evento para ser activadas)
emisorProductos.on('compra', () => {
    console.log('Se realizo una compra');
});

emisorProductos.on('venta', () => {
    console.log('Se realizo una venta');
});

// la función .emit es quien buscará y pondrá en marcha la 
// función .on 
emisorProductos.emit('compra');

emisorProductos.emit('venta');

// En este caso tenemos dos .emit que buscan cada una un nombre que tiene
// que coincidir con el .on para que pueda ser ejecutado
// si no coincide con ninguno, entonces no se ejecutará nada

// ------------------------------------------------

emisorProductos.on('compraT',(total)=> {
    console.log(`La compra total es de ${total}€`);
})


emisorProductos.emit('compraT', 780);

// se puede incluir todos los parametros que sean necesarios
// ej. ('compra', (comPrecio, iva, comTotal)=>{})