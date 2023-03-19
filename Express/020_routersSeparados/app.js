const express = require('express');
const app = express();

const {routerMatematicas} = require('./routers/matematicas');
const {routerProgramacion} = require('./routers/programacion');

/* 
    Separación de routers en diferentes archivos
*/

app.use('/api/cursos/programacion',routerProgramacion);
app.use('/api/cursos/matematicas',routerMatematicas);




const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
  console.log(`Escuchando en el puerto ${PORT}...`);  
});
