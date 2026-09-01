function GeneradorDeUsuario(nombre_completo){
    nombre_completo = nombre_completo.replaceAll(" ", "");
    nombre_completo = nombre_completo.toLowerCase();
    
    return nombre_completo+"_dev";
}

nombre = prompt("Escribe tu nombre")
if(nombre==null){
    console.log("Nombre invalido")
}
else console.log("Usuario generado: ", GeneradorDeUsuario(nombre));

