$(function(){
    window.onscroll=function() {
        var scrollTop = document.body.scrollTop != 0 ? document.body.scrollTop : document.documentElement.scrollTop;
        var height = 217;
        if(scrollTop>=height){
            $('.person_info ul').addClass('posit');
        }else{
            $('.person_info ul').removeClass('posit')
        }
    }

})