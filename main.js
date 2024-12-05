
const TasaDeConversion = 0.95; 

function convertirMoneda() {

const TipoDeConversion = prompt("¿Qué conversión desea realizar?\n1. Dólar a Euro\n2. Euro a Dólar");

if (TipoDeConversion === "1" || TipoDeConversion === "2") {
 
  const amount = parseFloat(prompt("Introduce la cantidad a convertir:"));

  if (!isNaN(amount) && amount > 0) {
    let result;

    if (TipoDeConversion === "1") {
      result = amount * TasaDeConversion;
      alert(`${amount} USD son ${result.toFixed(2)} EUR.`);
    } else {
      result = amount / TasaDeConversion;
      alert(`${amount} EUR son ${result.toFixed(2)} USD.`);
    }
  } else {
    alert("Por favor, introduce una cantidad válida.");
  }
} else {
  alert("Opción inválida. Por favor selecciona 1 o 2.");
}

}

convertirMoneda();