'use strict'
const recordsEstudiante = {
    nombre: undefined,
    puntajeTecnico: undefined,
    poncentajeHSE: undefined,
    eliminar: false,
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
        $('#mostrarPuntajesAltos').click(recordsEstudiante.filtrarMayor70)
        $('#eliminarPuntajesBajos').click(recordsEstudiante.filtrarEliminar);

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
            <div class="col-xl-4 col-sm-4">${recordsEstudiante.estudiante[indice].nombre}</div>\
            <div class="col-xl-4 col-sm-4">${recordsEstudiante.estudiante[indice].porcentajTecnico}</div>\
            <div class="col-xl-4 col-sm-4">${recordsEstudiante.estudiante[indice].hse}</div>\
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
            recordsEstudiante.dibujarLista(elemento);
        });
    },
    dibujarLista: (elemento) => {
        $('#resultadosRecord').append(`<div class="row">\
        <div class="col-xl-4 col-sm-4">${elemento.nombre}</div>\
        <div class="col-xl-4 col-sm-4">${elemento.porcentajTecnico}</div>\
        <div class="col-xl-4 col-sm-4">${elemento.hse}</div>\
    </div>`);
    },
    filtrarMayor70: () => {
        recordsEstudiante.estudiante.filter((elemento) => {
            return ((parseInt(elemento.porcentajTecnico) + parseInt(elemento.hse)) >= 70) ?
                recordsEstudiante.dibujarLista(elemento) : console.log('');
        });
    },
    filtrarEliminar: () => {
        console.log('--')
        let menores70 = recordsEstudiante.estudiante.filter((elemento) => {
            return ((parseInt(elemento.porcentajTecnico) + parseInt(elemento.hse)) < 70) ?
                recordsEstudiante.dibujarLista(elemento) : console.log(elemento);
        });
        console.log(c)
        console.log(recordsEstudiante.estudiante);
    }

}
$(document).ready(recordsEstudiante.inicio);