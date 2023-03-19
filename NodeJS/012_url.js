/*
        CREAR UNA URL
*/

const myURL = new URL('https://www.ejemplo.org/cursos/programacion?ordenar=vistas&nivel=1');

//podemos extraer el nombre del host
console.log(myURL.hostname); // www.ejemplo.org

// la ruta
console.log(myURL.pathname); // /cursos/programacion

// los parametros (nos devuelve un objeto donde tienen los parametros, con clave / valor)
console.log(myURL.searchParams); // URLSearchParams { 'ordenar' => 'vistas', 'nivel' => '1' }

console.log(myURL.searchParams.get('ordenar')) // vistas