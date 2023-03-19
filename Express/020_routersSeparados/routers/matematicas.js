const express = require('express');

const {matematicas} = require('../data/cursos').infoCursos;
const routerMatematicas = express.Router();

routerMatematicas.get('/',(req,res)=>{
    res.send(JSON.stringify(matematicas));
})


routerMatematicas.get('/:tema',(req,res)=>{
    const tema = req.params.tema;
    const resultados = matematicas.filter(curso => curso.lenguaje === tema);

    if(resultados == 0){
        return res.status(404).send(`El lenguaje ${tema} no está disponible`);
    }

    res.send(JSON.stringify(resultados));
});

module.exports = {
    routerMatematicas
}