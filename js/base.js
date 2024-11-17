$(document).ready(function() {
    setupMobileBurger();

    $(".header-logo").click(function(event) {
       // Reload page on header click
        document.location.href="index.html";
    });


    $("#mainquizz").click(function(event) {
       // Reload page on header click
        document.location.href="index.html";
    });
});


function setupMobileBurger(){
    $('.mobile-menu-btn').on('click', function() {
        $('.nav-links').slideToggle(300).toggleClass('show');
    });

    // Close menu when clicking outside
    $(document).on('click', function(event) {
        if (!$(event.target).closest('.mobile-menu-btn, .nav-links').length) {
            // Only if in mobile mode
            if ($(window).width() <= 768){
                $('.nav-links').slideUp(300).removeClass('show');
            };
        }
    });

    // Close menu when window is resized above mobile breakpoint
    $(window).on('resize', function() {
        if ($(window).width() > 768) {
            $('.nav-links').removeAttr('style').removeClass('show');
        }
    });

    // Prevent menu from closing when clicking inside nav-links
    $('.nav-links').on('click', function(event) {
        event.stopPropagation();
    });
}

