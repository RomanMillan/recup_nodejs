const express = require('express');
const app = express();
const {infoCursos} = require('./cursos');


/* 
    Parametros Query : Son aquellos donde se insertan en la URL una clave/valor 
    ej: ?ordenar=vistas
    Cuando un usuario inserta una parametro query inserta una clave y un valor el cual podemos obtener y 
    trabajar con ello.
    Para capturar ese valor tenemos que hacerlo de la siguente manera: req.query.ordenar

    Si nos fijamos es muy parecido como cuando manejamos los anteriores parametos req.params.lenguaje
*/

// cursos de programación
app.get('/api/cursos/programacion/:lenguaje',(req,res)=>{
    const lenguaje = req.params.lenguaje;
    const resultados = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje);

    if(resultados == 0){
        return res.status(404).send(`El lenguaje ${lenguaje} no está disponible`);
    }

    /* 
        Comprobamos si el usuario ha insertado un parametro query con valor vistas (para ordenar por número de vistas) 
        Si es así devolvemos el resultado en formato JSON y cogiendo la constante resultado y usando el método .sort()
        podemos ordenar la lista de objetos en base a unos criterios.
        En este caso el criterio será el número de visitas y será ordenado con una función flecha donde el resultado 
        va a ser positivo si b es mayor que a
    */
    if(req.query.ordenar === 'vistas'){
       return res.send(JSON.stringify(resultados.sort((a,b) => b.vistas - a.vistas)));
    }
    
    res.send(JSON.stringify(resultados));

});



const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
  console.log(`Escuchando en el puerto ${PORT}...`);  
});
