
(function(){

    console.log('inicio');
    const fuerzaYamcha = 6;
    const fuerzaSaibaman = 3;
    const autoDestruccion = true;

    const promesa = new Promise( (resolve, reject) => {

        setTimeout( () =>{

            if(fuerzaYamcha > fuerzaSaibaman && !autoDestruccion) {
                resolve('Yamcha le gano al saibman');
            } else {
                reject('Yamcha fue derrotado');
            }

        }, 3000)

    } );

    promesa.then( resultado => console.log(resultado))
            .catch( err => console.error(err))
    console.log('Este código no fue bloqueado por la promesa');


})();