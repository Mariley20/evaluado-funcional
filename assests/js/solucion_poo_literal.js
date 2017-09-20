const recordsEstudiante = {
    nombre: undefined,
    puntajeTecnico: undefined,
    poncentajeHSE: undefined,
    limpiar: true,
    estudiante: [
        { nombre: "mariley", porcentajTecnico: "78", hse: "78" },
        { nombre: "yudit", porcentajTecnico: "90", hse: "90" },
        { nombre: "karina", porcentajTecnico: "23", hse: "89" }
    ],
    inicio: () => {
        this.nombre = $('#inputNombreApellido');
        this.puntajeTecnico = $('#inputPorcentajeTecnico');
        this.poncentajeHSE = $('#inputHSE');
        recordsEstudiante.configuracionBTN();
    },
    configuracionBTN: () => {
        $('#agregarEstudiante').click(recordsEstudiante.guardarDatoEstudiante);
        $('#mostrarLista').click(recordsEstudiante.mostrarListaEstudiantes);
    },
    guardarDatoEstudiante: () => {
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
    },
    limpiarFormulario: () => {
        $('#inputNombreApellido').val("");
        $('#inputPorcentajeTecnico').val("");
        $('#inputHSE').val("")
    },
    imprimirUltimo: () => {
        let indice = recordsEstudiante.estudiante.length - 1;
        recordsEstudiante.resultadosRecordLimpiar();
        $('#resultadosRecord').append(`<div class="row">\
            <div class="col-xl-4">${recordsEstudiante.estudiante[indice].nombre}</div>\
            <div class="col-xl-4">${recordsEstudiante.estudiante[indice].porcentajTecnico}</div>\
            <div class="col-xl-4">${recordsEstudiante.estudiante[indice].hse}</div>\
        </div>`);
    },
    resultadosRecordLimpiar: () => {
        $('#resultadosRecord').empty();
    },
    limpiarAlerta: () => {
        $('#alerta').empty();
    },
    mostrarListaEstudiantes: () => {
        recordsEstudiante.estudiante.map((elemento) => {
            $('#resultadosRecord').append(`<div class="row">\
            <div class="col-xl-4">${elemento.nombre}</div>\
            <div class="col-xl-4">${elemento.porcentajTecnico}</div>\
            <div class="col-xl-4">${elemento.hse}</div>\
        </div>`);
        });
    }

}
$(document).ready(recordsEstudiante.inicio);