const evaluar = () =>{
    const edad = prompt("Cuál es tu edad ?");

    if (edad < 18 ){
        alert("Eres menor de edad, no puedes continuar...!!");
        return;
    }
    else{
        alert("Eres mayor de edad, puedes continuar...!!");
    }

}

//evaluar(); si lo hago de esta manera, se ejecuta 1ro la orden dada (para este caso la funcion) y despues es que corre la pag 

setTimeout(evaluar, 3000); //haciendo lo de esta manera ocurre el caso contrario a lo anterior


