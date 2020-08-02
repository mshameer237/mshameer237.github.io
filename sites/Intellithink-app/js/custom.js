

$('.collapse-element').click(function () {
   $(this).find('i').toggleClass('fa-chevron-down fa-chevron-right')
});

$('.file-icn[title]').tooltip();
$('i[title]').tooltip(400);
$('p[title]').tooltip(400);
$('.badge[title]').tooltip(400);



 $(document).ready(function () {
         //Initialize tooltips
         $('.nav-tabs > li a[title]').tooltip();
         
         //Wizard
         $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {
         
         var $target = $(e.target);
         
         if ($target.parent().hasClass('disabled')) {
         return false;
         }
         });
         
         $(".next-step").click(function (e) {
         
         var $active = $('.wizard .nav-tabs li.active');
         $active.next().removeClass('disabled');
         $active.addClass('complete');
         nextTab($active);

         });
         $(".prev-step").click(function (e) {
         
         var $active = $('.wizard .nav-tabs li.active');
         prevTab($active);
         
         });
         });
         
         function nextTab(elem) {
         $(elem).next().find('a[data-toggle="tab"]').click();
         }
         function prevTab(elem) {
         $(elem).prev().find('a[data-toggle="tab"]').click();
         }







$(document).ready(function() {
 
  $("#owl-demo, #owl-demo1").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
    
       items : 1, 
       itemsDesktop : false,
       itemsDesktopSmall : false,
       itemsTablet: false,
       itemsMobile : false
 
  });
 
 
});





    $(function() {
        $('#getType').change(function(){
            $('.type-div').hide();
            $('#' + $(this).val()).show();
        });
    });

  