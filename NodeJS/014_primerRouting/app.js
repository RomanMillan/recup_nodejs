const http = require('http');
/* Al importar el archivo tenemos que indicar la ruta (en este caso como está en la misma carpeta ponemos ./) */
const cursos = require('./cursos');

const servidor = http.createServer((req,res)=>{
    /* cogemos el req y usando sintaxis de desestructuración obtenemos el metodo(GET, PUT, POST...) 
    y lo guardamos en una constante */
    const {method} = req;

    switch(method){
        case 'GET':
            return manejarSolicitudGet(req,res);
        case 'POST':
            let cuerpo = '';
            req.on('data',(contenido)=>{
                cuerpo += contenido.toString();
            })
            req.on('end',(cuerpo)=>{
                cuerpo = JSON.parse(cuerpo);
                console.log(cuerpo);
                return manejarSolicitudPost(req,res);
            })

        default:
            res.statusCode = 501;
            res.end(`El metodo: ${method} No puede ser manejado por el servidor`);
    }

})

/* Función creada para manejar las solicitudes con GET en nuestro servidor */
function manejarSolicitudGet(req, res){
    /* sacamos la ruta (path) del request (petición) */
    const path = req.url;

    /* según sea la ruta, hacemos una cosa u otra */
    if(path === '/'){
        /* enviamos una respuesta */
        return res.end(`Bienvenidos a mi primer servidor y API creados con node.js`);
    }else if(path === '/cursos'){
        /* convertimos a formato JSON los cursos que obtenemos de cursos > infoCursos (donde se almacenan todos los cursos)
            Los cursos están en formato objeto, por eso tenemos que pasarlos a JSON.
            cursos fue importado (require) previamente para poder ser usado.
        */
        return res.end(JSON.stringify(cursos.infoCursos))
    }else if(path === '/cursos/programacion'){
        return res.end(JSON.stringify(cursos.infoCursos.programacion));
    }

    res.statusCode = 404;
    res.end(`El recurso solicitado no existe`);
}

/* Función creada para manejar solicitudes con POST */
function manejarSolicitudPost(req,res){
    const path = req.url;

    if(path === '/cursos/programacion'){
        res.end(`El servidor ha recibido una solicitud POST para /cursos/programacion`);
    }

    res.statusCode = 404;
    res.end(`El recurso solicitado no existe`);
}


/* definimos el puerto */
const PUERTO = 3000;

/* creamos el escuchado, para que puedan llegar las solicitudes */
servidor.listen(PUERTO, ()=>{
    console.log(`Escuchando por el puerto: ${PUERTO}...`);
});