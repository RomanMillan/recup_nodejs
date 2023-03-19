const express = require('express');

const {programacion} = require('../data/cursos').infoCursos;
const routerProgramacion = express.Router();

routerProgramacion.get('/:lenguaje',(req,res)=>{
    const lenguaje = req.params.lenguaje;
    const resultados = programacion.filter(curso => curso.lenguaje === lenguaje);

    if(resultados == 0){
        return res.status(404).send(`El lenguaje ${lenguaje} no está disponible`);
    }

    if(req.query.ordenar === 'vistas'){
       return res.send(JSON.stringify(resultados.sort((a,b) => b.vistas - a.vistas)));
    }
    
    res.send(JSON.stringify(resultados));

});

routerProgramacion.get('/:lenguaje/:nivel',(req,res)=>{
    const lenguaje = req.params.lenguaje;
    const nivel = req.params.nivel;
    const resultados = programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel);

    if(resultados == 0){
        return res.status(404).send(`El lenguaje ${lenguaje} o nivel ${nivel} no está disponible`);
    }

    res.send(JSON.stringify(resultados));
});

module.exports = {
    routerProgramacion
};