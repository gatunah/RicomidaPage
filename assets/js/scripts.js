// 
// Se debe inicilizar el atributo con la funcion .tooltip() para activar los tooltips
$(document).ready(function () { //READY ASEGURA QUE PAGINA ESTE YA CARGADA
    $('[data-bs-toggle="tooltip"]').tooltip();
});
// 
$(document).ready(function () {
    $("#enviarCorreo").click(function () {
        alert("El correo fue enviado correctamente...");
    });
});
// 
$(document).ready(function () {
    $("h5").dblclick(function() {
        $(this).css({
            "color": "red"
        });
    });
});
//
$(document).ready(function () {
    $(".card-txt").click(function(){
        $(this).toggle();
    });
});