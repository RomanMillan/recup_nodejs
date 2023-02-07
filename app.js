function mostrar(valor){

    console.log(valor);
}

console.log("Primero") // 1.

// se ejecuta inmediatamente despues de todo el codigo sincrono
setImmediate(mostrar,"hola") // 2

console.log("ultimo") // 3

// el orden de ejecución será : 
// 1- 3 - 2