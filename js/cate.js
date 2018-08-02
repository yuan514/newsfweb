$(function(){
    window.onscroll=function() {
        var scrollTop = document.body.scrollTop != 0 ? document.body.scrollTop : document.documentElement.scrollTop;
        var height = 88;
        if(scrollTop>=height){
            $('.tab_menu').addClass('posit');
        }else{
           $('.tab_menu').removeClass('posit')
        }
    }
})