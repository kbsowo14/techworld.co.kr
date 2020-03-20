$(window).scroll(function () {
    var nowHeight = window.innerHeight;
    var nowScroll = $(document).scrollTop();
   
    if(nowHeight >= nowScroll){
        $('.gnb').removeClass('overheight-gnb');
        $('.white-logo').removeClass('overheight-logo');
        $('.white-logo').addClass('op-logo');
    }else {
        $('.gnb').addClass('overheight-gnb');
        $('.white-logo').removeClass('op-logo');
        $('.white-logo').addClass('overheight-logo');
    };
    
});
