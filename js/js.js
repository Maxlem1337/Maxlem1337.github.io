/* day_night_switch */
$(document).ready(function () {
    //$('body').toggleClass('day-background');

    $('#day_night_switch').on('click', function () {
        $('body').toggleClass('day-background');
    });
});

/* end day_night_switch */
/* smooth loading */
$(document).ready(function () {
    $('.container-load').addClass('container-load-loaded');
});
/* end smooth loading */