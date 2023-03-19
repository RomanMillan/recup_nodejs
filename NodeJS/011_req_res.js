const http = require('http');

const servidor = http.createServer((req,res)=>{
    console.log('===> req (solicitud)');
    console.log(req.url);
    /*
        Nos muestra la url que hemos accedido. En un caso normal (http:localhost:3000) nos mostrara un simple / . 
        Que nos indica que estamos en el home o ruta inicio.
        
        Si al incresar a la ruta ponemos algo mas ej.: http:localhost:3000/usuario
        nos mostrará en consola: /usuario
        Ya que nos imprime es la ruta que hemos puesto.
    */
    console.log(req.method);
    /*
        Ver que metodo es el usado en el req. 
        EJ.: GET, POST
    */
    
        // Si no tiene res.end() el proceso se queda de manera infinita pidiendo la solicitud.
        res.end('solicitud finalizada')
});


const puerto = 3000;
servidor.listen(puerto,()=>{
    console.log(`Escuchando en: http://localhost:${puerto}`);
});