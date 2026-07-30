const peticion = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/3");
    
    const data = await response.json();
    
    //console.log(response);
    //console.log(data);
    return data;
};

const data = peticion().then(console.log);

