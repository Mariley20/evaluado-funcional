let nombre;
let puntajeTecnico;
let poncentajeHSE;
let limpiar = true;
let estudiante = [
    { nombre: "mariley", porcentajTecnico: "78", hse: "78" },
    { nombre: "yudit", porcentajTecnico: "90", hse: "90" },
    { nombre: "karina", porcentajTecnico: "23", hse: "89" }
];

function inicio() {
    this.nombre = $('#inputNombreApellido');
    this.puntajeTecnico = $('#inputPorcentajeTecnico');
    this.poncentajeHSE = $('#inputHSE');
    recordsEstudiante.configuracionBTN();
}

function configuracionBTN() {
    $('#agregarEstudiante').click(recordsEstudiante.guardarDatoEstudiante);
    $('#mostrarLista').click(recordsEstudiante.mostrarListaEstudiantes);
}

function guardarDatoEstudiante() {
    recordsEstudiante.limpiarAlerta();
    if (this.nombre.val() == "" || this.puntajeTecnico.val() == "" || this.poncentajeHSE.val() == "") {
        $('#alerta').append(`<div class="alert alert-danger" role="alert">\
            !Escribe algo.</div>`);
    } else {
        let datos = {
            nombre: this.nombre.val(),
            porcentajTecnico: this.puntajeTecnico.val(),
            hse: this.poncentajeHSE.val()
        }
        recordsEstudiante.estudiante.push(datos);
        $('#alerta').append(`<div class="alert alert-success" role="alert">\
                 !Registrado con Exito.</div>`);
        recordsEstudiante.limpiarFormulario();
        recordsEstudiante.imprimirUltimo();
        console.log(recordsEstudiante.estudiante);
    }
}

function limpiarFormulario() {
    $('#inputNombreApellido').val("");
    $('#inputPorcentajeTecnico').val("");
    $('#inputHSE').val("")
}

function imprimirUltimo() {
    let indice = recordsEstudiante.estudiante.length - 1;
    recordsEstudiante.resultadosRecordLimpiar();
    $('#resultadosRecord').append(`<div class="row">\
            <div class="col-xl-4">${recordsEstudiante.estudiante[indice].nombre}</div>\
            <div class="col-xl-4">${recordsEstudiante.estudiante[indice].porcentajTecnico}</div>\
            <div class="col-xl-4">${recordsEstudiante.estudiante[indice].hse}</div>\
        </div>`);
}

function resultadosRecordLimpiar() {
    $('#resultadosRecord').empty();
}

function limpiarAlerta() {
    $('#alerta').empty();
}

function mostrarListaEstudiantes() {
    recordsEstudiante.estudiante.map((elemento) {
        $('#resultadosRecord').append(`<div class="row">\
            <div class="col-xl-4">${elemento.nombre}</div>\
            <div class="col-xl-4">${elemento.porcentajTecnico}</div>\
            <div class="col-xl-4">${elemento.hse}</div>\
        </div>`);
    });
}

inicio()