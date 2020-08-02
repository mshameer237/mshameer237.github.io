   // When the page has loaded


 $(document).ready(function(){
  jQuery.scrollSpeed(100, 80);
  $('.scroll-down').click(function(event) {
        event.preventDefault();
        var link = this;
        $.smoothScroll({
            scrollTarget: link.hash,
            speed: 1800 ,
            offset: 0,

        });

    }); 

  if ($(this).scrollTop() > 600){  
        $('header').addClass("sticky");
      }
      else{
        $('header').removeClass("sticky");
      }
  
    $(window).scroll(function() {
    if ($(this).scrollTop() > 400){  
        $('header').addClass("sticky");
      }
      else{
        $('header').removeClass("sticky");
      }
    });  



if ($(window).width() < 700){
 $(window).scroll(function() {
    if ($(this).scrollTop() > 40){  
        $('header').addClass("sticky");
      }
      else{
        $('header').removeClass("sticky");
      }
    });  
}





 
      
   

 $('.overlay nav ul li a'
  ).click(function(event) {
        event.preventDefault();
        var link = this;
        $.smoothScroll({
            scrollTarget: link.hash,
            speed: 1000,
            offset: -100,

        });
    });
 $('.quick-links ul li a').click(function(event) {
        event.preventDefault();
        var link = this;
        $.smoothScroll({
            scrollTarget: link.hash,
            speed: 1000,
            offset: -50,

        });
    });


 

    
});
