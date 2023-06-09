posicionarMenu();

$(window).scroll(function() {
    if ($(window).width() >= 992) { // Aplicar el efecto solo si el ancho de la ventana es mayor o igual a 992px
        posicionarMenu();
    }
});

function posicionarMenu() {
    var altura_del_header = $('.navegador').outerHeight(true);
    var altura_del_menu = $('.menu').outerHeight(true);

    if ($(window).scrollTop() >= altura_del_header){
        $('.menu').addClass('fixed'); 
        $('.pair').addClass('offset-sm-5');
 
    } else {
        $('.menu').removeClass('fixed');
        
        $('.pair').removeClass('offset-sm-5');
    }
}





