'use strict';

$(document).on('click', 'nav a', function(event){
    
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
});