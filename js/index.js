$(function(){
    $('.menu').click(function(){
        $('.menu_nav').slideToggle(300);
        $(this).toggleClass('menu_off');
    })
})

$('[class*="question"]>h3').append('<i></i><a></a>');

$('[class*="question"]>h3').click(function(){
    $(this).find('a').toggleClass('on_question')
    .closest('[class*="col-"]').siblings().find('h3>a').removeClass('on_question');

    $(this).next().slideToggle(300)
    .closest('[class*="col-"]').siblings().find('ul').slideUp(300);

 })

 $('.about h3').append('<a></a>');
 $('.about h3').click(function(){
    $(this).toggleClass('about_h3_bor').next().toggle(300).closest('[class*="col-"]').siblings().find('h3').removeClass('about_h3_bor').siblings('ul').hide(300);
 })


