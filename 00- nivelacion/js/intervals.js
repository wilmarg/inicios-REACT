const saludo = () =>{
    document.write("<li>Holaaaaa</li>");
};

document.write("<ol>");

//setInterval(saludo, 2000); //el numero es la cantidad de tiempo en mili-segundos que se ejecuta la accion/intervalo

setInterval(saludo()); //cuando se ejecuta de la forma saludo(), solo lo hace 1 vez

document.write("</ol>");
