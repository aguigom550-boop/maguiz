function obtenerNumeros() {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    return [n1, n2];
}

function mostrarResultado(valor) {
    document.getElementById("resultado").innerHTML = "Resultado" + valor;
}

function sumar() {
    let [a, b] = obtenerNumeros();
    mostrarResultado(a + b);
}

function restar() {
    let [a, b] = obtenerNumeros();
    mostrarResultado(a - b);
}

function multiplicar() {
    let [a, b] = obtenerNumeros();
    mostrarResultado(a * b);
}

function dividir() {
    let [a, b] = obtenerNumeros();
    if (b == 0) {
        mostrarResultado("no se puede dividir entre 0");
    } else{
        mostrarResultado(a / b);
    }
}
