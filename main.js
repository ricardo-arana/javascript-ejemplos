
(function(){

    const url = 'https://jsonplaceholder.typicode.com/todos/1';


    // fetch(url)
    // .then( response => {
    //     const json = response.json();
    //     json.then( data => {
    //         console.log( data)
    //         data.then
    //     })
    //     .catch( err => console.error(err));
    // })

    fetch(url)
    .then( res => res.json())
    .then( console.log)
    .catch( err => console.error(err))
    
    


})();