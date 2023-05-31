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
      let valorAutoActualInput = document.querySelector("#valorAutoActual");
      let valorAutoActual = +valorAutoActualInput.value;
    
      let ventasDebitoInput = document.querySelector("#ventasDebito");
      let ventasDebito = +ventasDebitoInput.value;

      let ventasSinDebitoInput = document.querySelector("#ventasSinDebito");
      let ventasSinDebito = +ventasSinDebitoInput.value;

      let morasInput = document.querySelector("#moras");
      let moras = +morasInput.value;

      let peaInput = document.querySelector("#pea");
      let pea = +peaInput.value;

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
      let valorPea = (valorAutoActual * 0.5) / 100;

      var totalDebito = valorVentaDebito * ventasDebito;
      var totalSinDebito = valorVentaSinDebito * ventasSinDebito;
      let totalPea = valorPea * pea;
      var sueldoTotal = Math.floor((totalDebito + totalSinDebito + totalPea) - moras);
      var sueldoSinBasico = Math.floor((totalDebito + totalSinDebito + totalPea) - (moras + 130000));

      document.querySelector("#sueldoSinBasico").innerHTML =
      "Sueldo sin básico: $" + sueldoSinBasico;
      document.querySelector("#sueldoTotal").innerHTML =
        "Sueldo total: $" + sueldoTotal;
      
      /* let p = document.querySelector("#sueldoSinBasico") */
}
    
/* const botonClick = document.querySelector("#boton");
botonClick.addEventListener("click", function () {
  const p = document.querySelector("#sueldoSinBasico");
  botonClick.style.color = "green";
  p.style.animation = slide - left;
    }) */