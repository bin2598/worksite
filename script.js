
$(document).ready(function(){

    $(window).scroll(function() {
        if (this.scrollY > 120){
            $(".navbar").addClass("sticky");
        }
        else{
            $(".navbar").removeClass("sticky")
        }
    });

    $(".menu-toggler").click(function() {
        $(this).toggleClass("active")
        $(".navbar-menu").toggleClass("active")
    })

    $("#navv").click(function() {
        if (window.innerWidth < 700 ){
            $(".navbar-menu").toggleClass("active")
            $(".menu-toggler").toggleClass("active")
        }
    });

});