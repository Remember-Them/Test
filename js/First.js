$(document).ready(function(){
    $(  '.nav a').click(function(e){
        var height = $(window).height();
        var target = $(this).attr('index');
        var finalH = 0;
        finalH = height * target;

        $('body,html').animate({ 
            scrollTop: finalH
        },500,function(){
            e.preventDefault();
            return false;
        });
    })
    $('.skill').click(function(){
        $('.fade').addClass('fade-in');
    })
})
   

