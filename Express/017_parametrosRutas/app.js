const express = require('express');
const app = express();
const {infoCursos} = require('./cursos');


/* 
    Para poder enrutar muchas rutas no es recomendable escribir explicitamente cada una 
    de las rutas que hay en cada apartado.

    Ej: En los cursos; en vez de tener 3 lenguajes de programación (python (basico), python (intermedio), javascript...), 
    tuvieramos 100, no sería óptimo escribir esos 100  lenguajes explicitamente.
    Para eso hay unos parametros de rutas que solucionan este problema.
    
    Ej: Escribiendo la ruta "/api/cursos/programacion/" + :lenguaje
    :lenguaje es la clave del objeto, en vez de escribir el valor escribimos la clave.
    
    IMPORTANTE: NO tiene porque llamarse igual. Es un nombre que le asignamos, despues se verá como buscarlo y sacar el valor
        y también se verá mas adelante otro ejemplo con matematicas como no hace flata llamarlo igual.
   

    Con :lenguaje estamos diciendo que es un parametro URL. (basicamente es como nombrar una variable donde 
        vamos a guardar un valor, el cual nos va a servir para depues buscar y filtrar los lenguajes)

    Ahora tenemos que objeter el parametro de req y guardarlo para ursarlo depues. 
    Ej.: req.params.lenguaje 
    lenguaje es el nombre que le hemos asignado nosotros como parametro URL.

    Despues tenemos que filtrar los cursos de de lenguajes con el que corresponde con el que el usuario a pedidio
    Esto se hace con el metodo .filter() se pone la ruta de nuestro objeto 
    ej: infoCursos.programacion. (aqui se pondría el nombre del curso explicitamente y es lo que vamos a filtrar)
    Como tenemos el nombre que nos interesa guardado en nuestra constante (const lenguaje), podemos ir mirando o filtrando 
    con: curso => curso.lenguaje === lenguaje
    curso es el nombre que le hemos puesto a cada uno de los objetos
    {
        id: 1,
        titulo:'Aprende Python',
        lenguaje: 'python',  <==== curso.lenguaje (lenguaje, tiene que ser igual para que pueda buscar el valor y compararlo)
        vistas: 15000,
        nivel: 'Basico'
    }
    por los que irá recorriendo nuestra función flecha.
    Entonces decimos que curso.lenguaje (ya que queremos comparar el valor de cada objeto (curso) de clave curso con 
    el valor de nuestra constante lenguaje) será guardado si es estrictamente igual a la constante de lenguaje
*/

// cursos de programación
app.get('/api/cursos/programacion/:lenguaje',(req,res)=>{
    const lenguaje = req.params.lenguaje;
    const resultados = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje);

    /* comprobamos que el valor insertado por el usuario es encontrado */
    if(resultados == 0){
        /* incluimos return para que no continue la ejecución de la función y un código de estado */
        return res.status(404).send(`El lenguaje ${lenguaje} no está disponible`);
    }

    res.send(JSON.stringify(resultados));
});

// cursos de matemáticas
/* en este caso le llamamos tema al nombre a buscar */
app.get('/api/cursos/matematicas/:tema',(req,res)=>{
    const tema = req.params.tema;
    const resultados = infoCursos.matematicas.filter(curso => curso.lenguaje === tema);

    if(resultados == 0){
        return res.status(404).send(`El lenguaje ${tema} no está disponible`);
    }

    res.send(JSON.stringify(resultados));
});

/*Ahora vamos a filtrar por lenguaje y nivel para programación */
app.get('/api/cursos/programacion/:lenguaje/:nivel',(req,res)=>{
    const lenguaje = req.params.lenguaje;
    const nivel = req.params.nivel;
    const resultados = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel);

    if(resultados == 0){
        return res.status(404).send(`El lenguaje ${lenguaje} o nivel ${nivel} no está disponible`);
    }

    res.send(JSON.stringify(resultados));
});


const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
  console.log(`Escuchando en el puerto ${PORT}...`);  
});
