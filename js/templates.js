(function(){

    let persona = {
        nombre: 'Ricardo',
        apellidoP: 'Arana Reyes',
        apellidoM: 'Guerrero',
        rol: 'Desarrollador',
        edad: 30
    }

    imprimir(persona);


    function imprimir({nombre, apellidoM, apellidoP, rol}) {
        //console.log('Mi nombre es ' + persona.nombre + '\nmi apellido es: ' + persona.apellidoP + ' ' + persona.apellidoM + ' y soy un ' + persona.rol);
        console.log(`Mi nombre es ${nombre} mi apellido es ${apellidoP} ${apellidoM} y mi rol es ${rol}`);
        console.log(`el resultado es ${ 2 +2 }`);
    }

})();