function calcular() {

    let nombreEst = document.getElementById("txtNombre").value;
    let fechaEst = new Date(document.getElementById("txtFecha").value);
    let tipoSangre = document.getElementById("txtSangre").value;
    let alturaPul = parseFloat(document.getElementById("txtAltura").value);
    let pesoKg = parseFloat(document.getElementById("txtPeso").value);
    let genero = document.getElementById("txtGenero").value;

    let hoy = new Date();
    let edad = hoy.getFullYear() - fechaEst.getFullYear();

    let alturaCm = alturaPul * 2.54;
    let pesoLb = pesoKg * 2.2046;

    let icono = "";
    if (genero === "F") {
        icono = "femenino.jpeg";
    }
    if (genero === "M") {
        icono = "masculino.jpeg";
    }

    document.getElementById("resultadoFinal").innerHTML =
        `<img src="${icono}" class="iconoGenero">
        <p><b>Nombre:</b> ${nombreEst}</p>
        <p><b>Tipo de sangre:</b> ${tipoSangre}</p>
        <p><b>Altura:</b> ${alturaCm.toFixed(2)} cm</p>
        <p><b>Peso:</b> ${pesoLb.toFixed(2)} lb</p>
        <p><b>Edad:</b> ${edad} años</p>`;
}