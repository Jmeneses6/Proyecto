function calcularTotal() {
    const cuenta = parseFloat(document.getElementById("cuenta").value);
    var porcentaje = parseFloat(document.getElementById("porcentaje").value);

    if (isNaN(cuenta) || isNaN(porcentaje)) {
        alert("ingrese números válidos.");
        return;
    }

    var porcentaje = (cuenta * porcentaje) / 100;
    var totalAmount = cuenta + porcentaje;

    document.getElementById("miBoton").addEventListener("click", function() {
        document.getElementById("miRecuadro").scrollIntoView({ behavior: "smooth" });
    });

    document.getElementById("totalCuenta").innerHTML = "Total de la cuenta: $" + cuenta;
    document.getElementById("propina").innerHTML = "Propina: $" + porcentaje;
    document.getElementById("total").innerHTML = "Total: $" + totalAmount;
}