
var nombre = 'Ricardo'
var arreglo = ['Lunes', 'Martes', 'Miércoles'];
console.time('ejemplo')
console.table(arreglo)

console.log('Hola ' + nombre);

if(true) {
    console.warn('Hola ' + nombre);
}

console.error('Hola ' + nombre);
console.timeEnd('ejemplo')