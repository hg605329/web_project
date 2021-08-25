$( document ).ready( function(){
    var jbTime = 150;
    var TbTime = 950;
    var gbTime = 350;
    $( '.text-main span' ).animate({
      opacity: '1',
    },
    TbTime, function(){
      $( '.main-video' ).animate({
        opacity: '1'
      },
      jbTime, function(){
        $( '.page1' ).animate({
          opacity: '1'
        },
        jbTime, function(){
            $('.page2').animate({
                opacity: '1'
            },
            jbTime, function(){
                $('.page3').animate({
                    opacity: '1'
                },
                jbTime, function(){
                    $('.page4').animate({
                        opacity: '1'
                    },
                    jbTime, function(){
                        $('.page5').animate({
                            opacity: '1'
                        },gbTime, function(){
                            $('.main-video').animate({
                                margin: '0',
                                left: '48px',
                                width: '1824px',
                                height: '850px'
                            },gbTime);
                        });
                    });
                });
            });
        });
      });
    });
});