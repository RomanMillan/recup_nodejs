/* lo primero es importar express */
const express = require('express');

/* lo segundo es llamar a express para que nos retorne una app la cual la capturamos en una constante */
const app = express();

/*  
    Nustro archivo cursos.js simulará una base de datos real. 
    La cual al tenemos que importar para poder usar.
*/
const {infoCursos} = require('./cursos');


/*  
    Implementación de rutas:
    En express es más fácil la implementación de rutas que en node.js

    Indicamos que metodo y camino que va a manejar.
    Esto es llamado routing

    En este caso usamos el metodo GET (.get()) y la ruta / dentro del metodo '/' (osea ruta raiz)
    como segundo argumento pasamos una función flecha para tomar req y res; así poder trabajar con la peticiones. 
*/
app.get('/',(req,res)=>{
    res.send('Mi primer servidor con express')
});

/* 
    Y de igualmanera podemos ir crendo más rutas para nuestro servidor.
    Ej: para obtener cursos o programación.
*/
app.get('/api/cursos',(req,res)=>{
    res.send(JSON.stringify(infoCursos));
})

app.get('/api/cursos/programacion',(req,res)=>{
    res.send(JSON.stringify(infoCursos.programacion));
})

app.get('/api/cursos/matematicas',(req,res)=>{
    res.send(JSON.stringify(infoCursos.matematicas));
})

/* 
    Para definir el puerto con process.env.PORT conseguios el pueto si está definido en una variable de entorno.
    Si no está definido pues que coja el puerto especificado. En este caso 3000    
*/
const PUERTO = process.env.PORT || 3000;
app.listen(PUERTO,()=>{
    console.log(`Escuchando en el puerto: ${PUERTO}...`);
})
