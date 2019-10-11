$('#menu2').slicknav({
    label: '',
    duration: 200,
});


$('.toTop').smoothScroll();

$(window).scroll(function () {
    var top = $(window).scrollTop();

    if (top > 300) {
        $('.toTop').fadeIn(500);
    } else {
        $('.toTop').fadeOut(500);
    }

});

 $(".group1").colorbox({rel:'group1'});