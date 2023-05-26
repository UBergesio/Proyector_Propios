/* 
let porcentajeDebito;
let porcentajeSinDebito;



function calculoDeSueldo(valorAutoActual, ventasDebito,ventasSinDebito, porcentajeDebito, porcentajeSinDebito, moras) {
  let cantidadVentas = ventasDebito + ventasSinDebito;
  if (cantidadVentas <= 4) {
    porcentajeSinDebito = 0.5;
    porcentajeDebito = 1;
  } else if (cantidadVentas == 5 && cantidadVentas == 6) {
    porcentajeSinDebito = 0.6;
    porcentajeDebito = 1.2;
  } else if (cantidadVentas >= 7 && cantidadVentas <= 9) {
    porcentajeSinDebito = 0.7;
    porcentajeDebito = 1.4;
  } else if (cantidadVentas > 10) {
    porcentajeSinDebito = 0.9;
    porcentajeDebito = 1.6;
  }
  
  let valorVentaDebito = (valorAutoActual * porcentajeDebito) / 100;
  let valorVentaSinDebito = (valorAutoActual * porcentajeSinDebito) / 100;
  
  let totalDebito = valorVentaDebito * ventasDebito
  let totalSinDebito = valorVentaSinDebito * ventasSinDebito
  let sueldoTotal = totalDebito + totalSinDebito - moras;
  let sueldoSinBasico = (totalDebito + totalSinDebito) - (moras + 130000)
  console.log(sueldoSinBasico);
  console.log(sueldoTotal);
}
calculoDeSueldo(6629400, 5, 2, porcentajeDebito, porcentajeSinDebito, 80000)

 */

    function calcularSueldo() {
      var valorAutoActualInput = document.getElementById("valorAutoActual");
      var valorAutoActual = parseInt(valorAutoActualInput.value);

      var ventasDebitoInput = document.getElementById("ventasDebito");
      var ventasDebito = parseInt(ventasDebitoInput.value);

      var ventasSinDebitoInput = document.getElementById("ventasSinDebito");
      var ventasSinDebito = parseInt(ventasSinDebitoInput.value);

      var morasInput = document.getElementById("moras");
      var moras = parseInt(morasInput.value);

      var porcentajeDebito;
      var porcentajeSinDebito;

      var cantidadVentas = ventasDebito + ventasSinDebito;

      if (cantidadVentas <= 4) {
        porcentajeSinDebito = 0.5;
        porcentajeDebito = 1;
      } else if (cantidadVentas >= 5 && cantidadVentas <= 6) {
        porcentajeSinDebito = 0.6;
        porcentajeDebito = 1.2;
      } else if (cantidadVentas >= 7 && cantidadVentas <= 9) {
        porcentajeSinDebito = 0.7;
        porcentajeDebito = 1.4;
      } else if (cantidadVentas > 10) {
        porcentajeSinDebito = 0.9;
        porcentajeDebito = 1.6;
      }

      var valorVentaDebito = (valorAutoActual * porcentajeDebito) / 100;
      var valorVentaSinDebito = (valorAutoActual * porcentajeSinDebito) / 100;

      var totalDebito = valorVentaDebito * ventasDebito;
      var totalSinDebito = valorVentaSinDebito * ventasSinDebito;
      var sueldoTotal = totalDebito + totalSinDebito - moras;
      var sueldoSinBasico = totalDebito + totalSinDebito - (moras + 130000);

      document.getElementById("sueldoSinBasico").textContent =
      "Sueldo sin básico: $" + sueldoSinBasico;
      document.getElementById("sueldoTotal").textContent =
      "Sueldo total: $" + sueldoTotal;
      console.log(sueldoSinBasico);
    }