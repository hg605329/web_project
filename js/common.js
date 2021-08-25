$(function(){

    $('header').load('index.html header > .area-inner')
    $('.area-nav-local').load('company1.html .area-nav-local > .nav-loacl')
    $('footer').load('company1.html footer > .footer-inner')

});


//헤더 스크롤 이벤트
$(function(){
    var lastScrollTop=0,
    delta= 15;
    $(window).scroll(function(event){
        var st= $(this).scrollTop();
        if(Math.abs(lastScrollTop-st) <= delta)return;
        if((st> lastScrollTop)&&(lastScrollTop>0)){
            $(".area-inner").css("top","-112px");
        }else{
            $(".area-inner").css("top","0px");
        }
        lastScrollTop = st;
    });
});


