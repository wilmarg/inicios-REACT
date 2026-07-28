axios.get("https://jsonplaceholder.typicode.com/users/3")
    .then((data) => {console.log(data.data.email)}); //.username u otros son los atributos del endpoint del placeholder




// otra forma de visualizar usando DESTRUCTURING mejor los atributos...
axios.get("https://jsonplaceholder.typicode.com/users/3")
    .then(( {data} ) => {console.log(data.username)});