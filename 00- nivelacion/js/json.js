const Usuario = {
    name: "Wilmar",
    edad: 31,
    sexo: "masculino",
    email: "wilmar@gmail.com",
    };

document.write("<p>" + Usuario.name + "<p>");
document.write("<p>" + Usuario.edad + "<p>");
document.write("<p>" + Usuario.sexo + "<p>");
document.write("<p>" + Usuario.email + "<p>");


/// destructuring 
document.write("destructuring");

const {name, edad, sexo, email} = { 
    name: "Nhey",
    edad: 21,
    sexo: "femenino",
    email: "nhey@gmail.com",
    };

document.write("<p>" + name + "<p>");
document.write("<p>" + edad + "<p>");
document.write("<p>" + sexo + "<p>");
document.write("<p>" + email + "<p>");

