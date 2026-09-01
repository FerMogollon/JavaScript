function calcularDescuento(precio, porcentaje) {
  if (
    typeof precio !== "number" ||
    typeof porcentaje !== "number" ||
    !Number.isFinite(precio) ||
    !Number.isFinite(porcentaje)
  ) {
    throw new TypeError("Los valores deben ser numeros validos");
  }

  if (precio < 0 || porcentaje < 0 || porcentaje > 100) {
    throw new RangeError("El precio no puede ser negativo y el porcentaje debe estar entre 0 y 100");
  }

  const montoDescuento = precio * (porcentaje / 100);
  const totalPagar = precio - montoDescuento;

  return {
    descuento: montoDescuento,
    total: totalPagar
  };
}

const entradaNombre = prompt("Ingrese el nombre del Producto");
const entradaPrecio = prompt("Ingrese el precio del producto");
const entradaPorcentaje = prompt("Ingrese el descuento a aplicar del producto (0-100)");

if (
  entradaNombre === null || entradaNombre.trim() === "" ||
  entradaPrecio === null || entradaPrecio.trim() === "" ||
  entradaPorcentaje === null || entradaPorcentaje.trim() === ""
) {
  console.log("Operacion cancelada o campos vacios");
} else {
  const precio = Number(entradaPrecio);
  const porcentaje = Number(entradaPorcentaje);

  if (!Number.isFinite(precio) || !Number.isFinite(porcentaje)) {
    console.log("Debe ingresar numeros validos para el precio y el porcentaje");
  } else {
    try {
      const resultado = calcularDescuento(precio, porcentaje);
      console.log(
        `El producto ${entradaNombre.trim()} se le aplicara un descuento de ${porcentaje}% ($${resultado.descuento.toFixed(2)}) dando un total de $${resultado.total.toFixed(2)}`
      );
    } catch (error) {
      console.log(error.message);
    }
  }
}