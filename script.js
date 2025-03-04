// script.js
function evaluarNota() {
    let nota = parseInt(document.getElementById("nota").value, 10);
    let resultadoTexto = "";

    if (isNaN(nota) || nota < 0 || nota > 100) {
        resultadoTexto = "Por favor, ingrese un número válido entre 0 y 100.";
    } else {
        if (nota >= 90) {
            resultadoTexto = "Excelente";
        } else if (nota >= 75) {
            resultadoTexto = "Bien";
        } else if (nota >= 60) {
            resultadoTexto = "Suficiente";
        } else {
            resultadoTexto = "No aprueba";
        }
    }
    document.getElementById("resultado").textContent = `Nota: ${nota} - Resultado: ${resultadoTexto}`;
}
