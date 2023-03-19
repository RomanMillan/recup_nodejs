/*
                Primer servidor con el modulo HTTP

    Lo primero tenemos que importar el modulo http para crear el escuchador (listener)

*/

const http = require('http');

/* 
    creamos una constante para almacenar el servidor
    y despues tenemos que utilizar el metodo crateServer para crear el servidor.
    
    Cada vez que reciba una solicitud ejecutará la función que le vamos a pasar dentro de createServer() (es una función flecha):
    req: La solicitud que le pidio el cliente al servidor.
    res: La respuesta que le envia el servidor al cliente.
    Cada uno de ellos tiene sus atributos y metodos especificos.

    Con el metodo .end() de res, nos permite terminar el req y enviar la respuesta. Osea una vez que hayamos terminado con todo
    el proceso que requeria el servidor , escribimos res.end() y entre parentesis pasamos como argumento el resultado que queremos
    enviar como respuesta, al cliente.

*/

// cada vez que se realice una solicitud del cliente al servidor esta constante se ejecutará.
const servidor = http.createServer((req,res)=>{
    res.end('Hola Mundo')
});

/* 
    Resumen:
    1º- Crear la constante donde se va a guardar el servidor.
    2º- Variable donde contiene el modulo http.
    3º- Metodo para crear un servidor.
    4º- Dentro de los parentesis creamos una función flecha con los parametros req (contiene la solicitud http), 
        res (responde dicha solicitud).
    5º- Dentro de la función flecha realizamos el proceso que necesitemos.

*/

/* 
    Cuando creamos el servidor y lo iniciamos, haremos que ese servidor escuche a las solicitudes
    del cliente.
    Pero antes tenemos que crear un puerto para transmitir la información.
    
    Puerto: Es una ubicación virtual del S.O. en la cual se puede acceder a una aplicación o un proceso especifico
        que se esté ejecutando en ese puerto.

    Para crear el puerto tenemos que entrar en el servidor (la constante donde guardamos el servidor creado)
    y usamos el metodo listen() y dendro tenemos que especificar el puerto por el cual va a empezar a escuchar.
    tambien podemos agregar (como en este caso) una función para que una vez que se ejecute realice una función. 
    En este caso, una vez que el servidor se ejecute por el puerto 3000 se ejecutará la función donde nos dirá por 
    consola que el servidor esta en ejecución o escuchando.

*/
/*
servidor.listen(3000, ()=>{
    console.log('El servidor esta en ejecucion (escuchando)...')
})
*/

const puerto = 3000;
servidor.listen(puerto, ()=>{
    console.log(`El servidor esta escuchando en: http://localhost:${puerto}`)
})


/* 
    Ahora para ejecutar nuestro servidor tenemos que abrir la consola y donde está el archivo a ejecutar
    escribimos node nombreArchivo.js
    Una vez ejecutado ya podemos ir al navegador y buscar con la ruta localhost:3000
    y ver el mensaje de "hola mundo" que recibimos como respuesta anteriormente escrito en nuestra
    función flecha cuando creamos el servidor.

*/