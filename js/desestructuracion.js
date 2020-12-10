
(function(){

    let persona = {
        nombre: 'Ricardo',
        apellidoP: 'Arana Reyes',
        apellidoM: 'Guerrero',
        rol: 'Desarrollador',
        edad: 30
    }

    const {edad, rol} = persona;

    const dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];

    // const [primero, , tercero, , ultimo] = dias;
    // console.log(primero);
    // console.log(tercero);
    // console.log(ultimo);

    function imprimirArreglo ([primero, , tercero, , ultimo]) {
        console.log(primero);
    console.log(tercero);
    console.log(ultimo);
    }

    imprimirArreglo(dias);

    //console.log(edad, rol)

   //    imprimir(persona);


    function imprimir({nombre, apellidoM, apellidoP, rol}) {
        //console.log('Mi nombre es ' + persona.nombre + '\nmi apellido es: ' + persona.apellidoP + ' ' + persona.apellidoM + ' y soy un ' + persona.rol);
        console.log(`Mi nombre es ${nombre} mi apellido es ${apellidoP} ${apellidoM} y mi rol es ${rol}`);
        console.log(`el resultado es ${ 2 +2 }`);
    }

})();