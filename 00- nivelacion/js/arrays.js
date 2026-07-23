const numeros = [1,2,3,4];

document.write("<ul>");

numeros.map((numero) => { 
    document.write("<li>" + numero + "</li>");
});

document.write("***");
/// forma corta de escribir...  
numeros.map((numero) => document.write("<li>" + numero + "</li>"));

//document.write("</ul>");
document.write("***");

const nuevo = numeros.map((numero) => document.write("<li>" + (numero + 1) + "</li>"));

//document.write("</ul>");

/// destructuring
document.write("destructuring");
const [user0,,user2,]= ["Wilmar","Alberto","Nhey","Alejandra"];

document.write("<li>" + (user0) + "</li>");
document.write("<li>" + (user2) + "</li>");
document.write("</ul>");