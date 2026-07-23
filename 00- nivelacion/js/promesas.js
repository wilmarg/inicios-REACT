const sumar = (a,b) => {
    return new Promise(
        (resolve, reject) => {
            if (a<0 || b<0){
                reject("Esto no es válido...");
            }
            else{
                resolve(a+b);
            }
        }
    );

};

const resultado = sumar(-4, 3).
    then((res) => {document.write(res)}).
        catch((error) =>{document.write(error)});



//console.log(resultado)
//document.write(resultado)

