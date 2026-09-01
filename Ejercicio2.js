function calcularNota(x) {
  if (typeof x !== "number" || !Number.isFinite(x)) {
    throw new TypeError("Por favor, ingrese unicamente un numero entero o decimal");
  }

  if (x < 0 || x > 100) {
    return "Nota invalida";
  } else if (x >= 90) {
    return "Su nota es excelente";
  } else if (x >= 80) {
    return "Su nota es muy buena";
  } else if (x >= 70) {
    return "Su nota es buena";
  } else if (x >= 60) {
    return "Su nota es regular";
  } else {
    return "Nota insuficiente";
  }
}

const entrada = prompt("Ingrese su nota: ");

if (entrada === null || entrada.trim() === "") {
  console.log("Operacion cancelada o entrada vacia");
} else {
  const nota = Number(entrada);

  if (!Number.isFinite(nota)) {
    console.log("El valor ingresado no es un numero valido");
  } else {
    try {
      const resultado = calcularNota(nota);
      console.log(resultado);
    } catch (error) {
      console.log(error.message);
    }
  }
}