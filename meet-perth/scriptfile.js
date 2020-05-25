

var element_hello = $('.hello').offset().top
var element_dribbble = $('.dribbble').offset().top;

$(window).on('scroll', function() {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_hello = element_hello;
    var scroll_pos_dribbble = element_dribbble;

    if(y_scroll_pos > scroll_pos_hello) {
        
        // alert('hello');
        $('.hello .tablet').addClass("on");
    }

    if(y_scroll_pos > scroll_pos_dribbble) {
        
        // alert('dribbble');
        $('.dribbble .set').addClass("on");
    }
});



var burger = $(".burger");
burger.on("click", function(e){    
    $(this).parent().find("ul").toggleClass("show");
    console.log("clicked");
    e.preventDefault();
});


$('body').click(function(evt){    
    if(!$(evt.target).is('.burger')) {        
        burger.parent().find("ul").removeClass("show");
    }
});

