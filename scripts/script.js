$(function() {

    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();

    $(window).on("scroll load resize", function(){
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();
        
        if(scrollPos > introH){
            header.addClass("fixed");
        } else{
            header.removeClass("fixed");
        }

    });

    
    /* Nav Toggle */
    let nav = $("#nav");
    let navToggle = $("#navToggle");

    navToggle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");
    });
});