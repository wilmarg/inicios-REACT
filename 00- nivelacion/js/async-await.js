const saludo = () => {
    return new Promise(
        (resolve) => {resolve ("Holaaaaaaaaaa");}
    );
};


//usando ASYNC
const saludo2 = async() => {
    return "Hey ven acá"; };


saludo().then( (response) => {console.log(response)} );
saludo2().then( (response) => {console.log(response)} );

// ahora para AWAIT...

//const peticion = () => {...}
const peticion = async() => { //cuando usamos el ASYNC lo que sucede es que primero se realiza la peticion internamente, antes de la visualizacion de los datos
    setTimeout( () => {
        const datos = {
            "id": 3,
            "name": "Clementine Bauch",
            "username": "Samantha",
            "email": "Nathan@yesenia.net",
        };

        console.log(datos);
    }, 1000);
};


peticion().then(console.log); //para usar con el async
//peticion();

