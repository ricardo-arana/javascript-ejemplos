

// formar de crear variables
// let para crear variables
// const para crear constantes
var edad = 20;    
(function() {
    /// desarrolla A
edad = 30;
console.log(edad);
const NOMBRE = 'Ricardo';
const arreglo = ['1','2', '3', '4'];
const persona = {
    nombre: 'Ricardo',
    apellido: 'Arana'
};

persona.nombre = 'Carlos';
persona.apellido = 'Perez';

console.log(persona);
arreglo.push('5');
console.log(arreglo);
console.log('Mi nombre es ' + NOMBRE);

if(true) {
    // ... un bloque de codigo;
    // desarrollador B
    let nombre = 'Pedro';
    console.log('Mi nombre es ' + nombre);
}

// desarrollador A
console.log('Mi nombre es ' + NOMBRE);
})();