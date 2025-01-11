// Las pruebas unitarias testean funciones

// 1. Importar dependencias, servicios, funciones
import { suma } from "../src/utils/ejemplo.js";

// 2. Definir un bloque de pruebas

/*
    Se debe instalar Jest para usar las palabras reservadas
    PALABRAS RESERVADAS PARA HACER PRUEBAS SON:
    Describe -> Agrupar el bloque de pruebas
    it -> Define casos individuales dentro de cada bloque de pruebas
    Expect - toBe -> Definimos cual es el resultado/respuesta esperado
*/

// 1. Paso una descripcion y luego una funcion flecha
describe('Probar la funcion suma', () => {
    //Aca nuestro bloque de pruebas

    //Caso de prueba 1: se sumen numeros positivos
    //1. Describo qué es lo que quiero que suceda
    //2. Definir que es lo que espero que suceda
    it('Debería sumar dos numeros positivos correctamente', () => {
        expect(suma(5,2)).toBe(7)
    })

    //Caso de prueba 2: Se sumen numeros negativos
    it('Debería sumar dos numeros negativos correctamente', () => {
        expect(suma(-3,-5)).toBe(-8)
    })
});

