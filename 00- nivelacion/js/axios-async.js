const peticion = async () => {
    const {data} = await axios("https://jsonplaceholder.typicode.com/users/3");
    
    //console.log(response);
    //console.log(data);
    return data;
};

//peticion();

const data = peticion().then(console.log);