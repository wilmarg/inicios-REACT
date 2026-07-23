const frutas =["manzana", "uva", "papaya"]
const frutas2 =["naranja", "limon", "maracuya"]

document.write("<ul>");

  
document.write("<li>" + frutas + "</li>")
document.write("<li>" + frutas2 + "</li>")
document.write("<li>" + "xxxx" + "</li>")
document.write("<li>" + (frutas + frutas2) + "</li>")
document.write("<li>" + "xxxx" + "</li>")

const nuevo = [...frutas, ...frutas2]
document.write("<li>" + nuevo + "</li>")


document.write("</ul>");
