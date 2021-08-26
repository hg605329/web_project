// section cont2_visual 스크롤 애니메이션
$(document).ready(function() {
    $(window).scroll( function(){
			
        $('.cont2-inner').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight() /3;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1'},1000);
            }
            
        }); 
    });
});

$(document).ready(function() {
    $(window).scroll( function(){
			
        $('.cont4-inner').each( function(e){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight() /3;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1'},1000);
            }
            
        }); 
    });
});