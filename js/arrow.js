(function(){

    const duplicar = (numbero) => numbero * 2;

    console.log('El valor duplicado de 5: ',duplicar(5));

    const dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];

    const diasFiltrados = dias.filter((v) => v === 'Lunes');
    console.log(diasFiltrados);
    // function duplicar(numero) {
    //     return numero * 2;
    // } 


    ////////////////// ------------ ///////
    // function resultadoDoble( a, b ){
    //     return (a + b) * 2
    //   }
    
      const resultadoDoble = (a,b) => ( a + b ) * 2;

    function crearPersona(nombre) {
        const persona = {
            nombre: nombre
        };
        return persona;
    }

    const crearPersona2 = (nombre2) => ({nombre2});

    console.log(crearPersona2('Ricardo'));

})();