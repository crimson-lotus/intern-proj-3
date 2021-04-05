$(window).scroll(function(){
    if($(this).scrollTop() > 240) {
        $("#about-area h2").addClass("animate");
        $(".about").addClass("animate");
    }
    if($(this).scrollTop() > 915) {
        $(".learn-div").addClass("animate-learn");
        $(".learn-img").addClass("animate-learn");
        setTimeout(() => {
            $(".teach-div").addClass("animate-teach");
            $(".teach-img").addClass("animate-teach");
        }, 300);
    }
    if($(this).scrollTop() > 1800) {
        $(".slider").addClass("animate");
    }
});
