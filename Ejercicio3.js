function ConversorTemperatura(x) {
  if (typeof x !== "number" || !Number.isFinite(x)) {
    throw new TypeError("Por favor, ingrese unicamente un numero valido (entero o decimal).");
  }

  return (x * 1.8) + 32;
}

const entrada = prompt("Ingrese los °C a convertir a °F:");

if (entrada === null || entrada.trim() === "") {
  console.error("Operacion cancelada o campo vacio. Debe ingresar un valor.");
} else {
  const celsius = Number(entrada);

  if (!Number.isFinite(celsius)) {
    console.error("El valor ingresado no es válido.");
  } else {
    try {
      const resultado = ConversorTemperatura(celsius);
      console.log(`${celsius}°C equivale a ${resultado.toFixed(2)}°F`);
    } catch (error) {
      console.error(error.message);
    }
  }
}