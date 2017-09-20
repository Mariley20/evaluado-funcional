let limpiar = true;
let estudiante = [
    { nombre: "mariley", porcentajTecnico: "78", hse: "78" },
    { nombre: "yudit", porcentajTecnico: "90", hse: "90" },
    { nombre: "karina", porcentajTecnico: "23", hse: "89" }
];
configuracionBTN();

function configuracionBTN() {
    $('#agregarEstudiante').click(guardarDatoEstudiante);
    $('#mostrarLista').click(mostrarListaEstudiantes);
}

function guardarDatoEstudiante() {
    limpiarAlerta();
    if ($('#inputNombreApellido').val() == "" || $('#inputPorcentajeTecnico').val() == "" || $('#inputHSE').val() == "") {
        $('#alerta').append(`<div class="alert alert-danger" role="alert">\
            !Escribe algo.</div>`);
    } else {
        let datos = {
            nombre: $('#inputNombreApellido').val(),
            porcentajTecnico: $('#inputPorcentajeTecnico').val(),
            hse: $('#inputHSE').val()
        }
        estudiante.push(datos);
        $('#alerta').append(`<div class="alert alert-success" role="alert">\
                 !Registrado con Exito.</div>`);
        limpiarFormulario();
        imprimirUltimo();
        console.log(estudiante);
    }
}

function limpiarFormulario() {
    $('#inputNombreApellido').val("");
    $('#inputPorcentajeTecnico').val("");
    $('#inputHSE').val("")
}

function imprimirUltimo() {
    let indice = estudiante.length - 1;
    resultadosRecordLimpiar();
    $('#resultadosRecord').append(`<div class="row">\
            <div class="col-xl-4">${estudiante[indice].nombre}</div>\
            <div class="col-xl-4">${estudiante[indice].porcentajTecnico}</div>\
            <div class="col-xl-4">${estudiante[indice].hse}</div>\
        </div>`);
}

function resultadosRecordLimpiar() {
    $('#resultadosRecord').empty();
}

function limpiarAlerta() {
    $('#alerta').empty();
}

function mostrarListaEstudiantes() {
    estudiante.map((elemento) => {
        $('#resultadosRecord').append(`<div class="row">\
            <div class="col-xl-4 col-sm-4">${elemento.nombre}</div>\
            <div class="col-xl-4 col-sm-4">${elemento.porcentajTecnico}</div>\
            <div class="col-xl-4 col-sm-4">${elemento.hse}</div>\
        </div>`);
    });
}