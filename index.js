/*pedir input*/

document.addEventListener("DOMContentLoaded", function () {
    const boton = document.getElementById ("fiboButton");
    boton.addEventListener("click", calcular);
});
/*implementación de fibonacci */ 
function calcular() {
    const input = document.getElementById("fiboInput").value;
    const n = parseInt(input);
    /*verificar si numero es mayor a 0 o que escribió un numero*/ 
    if (isNaN(n) || n < 1) {
        alert("Por favor, ingrese un número mayor a 0");
        return
    }
    const fibo = [];
    for (let i = 0; i<n; i++) {
        if (i === 0) fibo.push(0);
        else if(i === 1) fibo.push(1);
        else fibo.push(fibo[i-1] + fibo[i-2]);
    }
    document.getElementById("resultado").innerText = fibo.join(",");

}

