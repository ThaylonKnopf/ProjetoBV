

function desabilitarValidacao() {
    var campos = document.querySelectorAll('#meuFormulario');
    campos.forEach(campo => campo.removeAttribute('required'));
    location.assign('/AcidenteTransito/selecionar/selecionar.html')
}

function habilitarValidacao() {
    var campos = document.querySelectorAll('#meuFormulario input');
    campos.forEach(campo => campo.setAttribute('required', ''));
}

