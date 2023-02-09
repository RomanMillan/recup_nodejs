// PROMESAS EN JAVASCRIPT (ASINCRONO)
/*
Una promesa es un objeto de JS, que representa el eventual resultado
(o error) de una operación asíncrona.
Cuando se ejecuta una operación asincrona no se puede saber 
cuando ni como va a terminar (hasta que no se complete el proceso).
El servidor puede ir lento, o la base de datos, etc

La promesa una vez creada toma el estado pending(pendiente) y 
una vez pasado el tiempo terminará en uno de estos dos estado:
- Fulfilled (cumplida) 
- Rejected (Rechazada)

El objeto de una promesa se asocia a una funcion callback
Esta función se ejecuta una vez se completa el proceso asincrono
para procesar el resultado.
callback puede ser definida como: "Función que se pasa a otra funcion
como argumento y luego se ejecuta dentro de la funcion externa"

ej: F y H son dos funciones;
    Se puede pasar la funcion F como argumento a H y
    dentro de H llamar a F una vez terminado el proceso

las promesas tienen un método .then() el cual podemos 
decidir que ocurre cuando se completa la promesa (exito o error)

 */
