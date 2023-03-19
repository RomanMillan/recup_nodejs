const express = require('express');
const app = express();
const {infoCursos} = require('./cursos');


/* 
    Routers : Permite reutilizar nuestro código y hacerlo más conciso.
        en nuestra ruta inicial /api/cursos en vez de repetirlo en cada una de nuestras rutas podemos 
        hacerlo más versatil.

    Primero creamos una costante con un nombre que contendrá ese path el cual será formado con express.Router()
    y despues usando app.use() que es la aplicaión que nos devuelve al llamar a express y el metodo .use()
    creamos la ruta.
    Dentro de .use() insertamos la ruta que va a ser reutilizada mas de una vez  y como segundo parametro 
    pasamos el nombre de la constante que hemos creado anteriormente.
*/
const routerProgramacion = express.Router();
app.use('/api/cursos/programacion',routerProgramacion);


/* 
    En vez de usar app.get(...)
    usamos la constrante definida anteriormente, "el router"
    y ese rotuer será la base para todas las rutas que usemos.
    Ej: en mi caso /api/cursos/programacion es la base y depues le agrego  /:lenguaje
    en otro caso podría agregarle /:lenguae/:nivel u otras rutas que iniciaran siempre igual.
    Esto lo hace mas legible el código y fácil de mantener
 */
routerProgramacion.get('/:lenguaje',(req,res)=>{
    const lenguaje = req.params.lenguaje;
    const resultados = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje);

    if(resultados == 0){
        return res.status(404).send(`El lenguaje ${lenguaje} no está disponible`);
    }

    if(req.query.ordenar === 'vistas'){
       return res.send(JSON.stringify(resultados.sort((a,b) => b.vistas - a.vistas)));
    }
    
    res.send(JSON.stringify(resultados));

});



const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
  console.log(`Escuchando en el puerto ${PORT}...`);  
});
