


$(document).ready(function() {
 


    function headerFunctions(){
        var scroll_pos = 0;
        scroll_pos = $(this).scrollTop();
      if(scroll_pos > 50) {
               $("header").addClass("shrink");
                if($("header").hasClass('white-bg')){
                  $("header").removeClass('white-bg').addClass('bg-fill');
                }else  if($("header").hasClass('dark-bg')){
                  $("header").removeClass('dark-bg').addClass('bg-fill-dark');
                }else  if(($("header").hasClass('selfi-bg')) && $("header").hasClass('new-user')){
                  $("header").removeClass('selfi-bg').addClass('bg-fill');
                  $('.search-change').attr("src","images/search.svg");
                  $('.home-icon img').attr("src","images/home-icon.svg");
                }
                else  if($("header").hasClass('selfi-bg')) {
                  $("header").removeClass('selfi-bg').addClass('bg-fill-black');
                }
                if ($('.vf-show-first') && $('.vf-show-first').length) {
                  $('.vertical-floating-menu').addClass('fadeIn');
                    $('.vertical-floating-menu').removeClass('change-bg');

                }
              } else {
                 if ($("header").hasClass('bg-fill-dark')){
                   $("header").removeClass('bg-fill-dark').addClass('dark-bg');
                 }else if ($("header").hasClass('bg-fill-black')){
                   $("header").removeClass('bg-fill-black').addClass('selfi-bg');
                 }
                 else  if(($("header").hasClass('bg-fill')) && $("header").hasClass('new-user')){
                  $("header").removeClass('bg-fill').addClass('selfi-bg');
                   $('.search-change').attr("src","images/search-white.svg");
                   $('.home-icon img').attr("src","images/home-icon-white.svg");
                } if($("header").hasClass('bg-fill')){
                   $("header").removeClass('bg-fill').addClass('white-bg');
                 }
                $("header").removeClass("shrink");
               if ($('.vf-show-first') && $('.vf-show-first').length) {
                  $('.vertical-floating-menu').removeClass('fadeIn');


                }
            }
    }
     headerFunctions();
     
     $(document).scroll(function() { 
           headerFunctions();
        });


    
 
    $('#banner').owlCarousel({
        loop: true,
        margin: 10,
        items: 1,
        nav: false,
        freeDrag: false,
        autoplay: true,
        autoWidth: false,
        animateIn: 'fadeIn', // add this
        animateOut: 'fadeOut' // and this
    })

    $('#bannerNewCustomer').owlCarousel({
        loop: true,
        margin: 10,
        items: 1,
        nav: false,
        freeDrag: false,
        autoplay: true,
        autoWidth: false,
        animateIn: 'fadeIn', // add this
        animateOut: 'fadeOut' // and this
    })
    $('#geojitNews').owlCarousel({
        loop: true,
        margin: 10,
        items: 1,
        nav: false,
        freeDrag: false,
        autoplay: false,
        autoWidth: false,
        dots: true
    })
    $('#marketNews').owlCarousel({
        loop: true,
        margin: 10,
        items: 1,
        nav: false,
        freeDrag: false,
        autoplay: false,
        autoWidth: false,
        dots: true
    })
    $('#gallerySlider').owlCarousel({
        loop: true,
        margin: 10,
        items: 1,
        nav: false,
        freeDrag: false,
        autoplay: true,
        autoWidth: false,
        autoplayTimeout:10000,
        dots: true
    })
    $('#whatsNew').owlCarousel({
        loop: true,
        margin: 10,
        items: 1,
        nav: false,
        freeDrag: false,
        autoplay: true,
        autoWidth: false,
        autoplayTimeout:10000,
        dots: true
    })
    $('#companyUpdate').owlCarousel({
        loop: true,
        margin: 10,
        items: 1,
        nav: false,
        freeDrag: false,
        autoplay: true,
        autoWidth: false,
        autoplayTimeout:10000,
        dots: true
    })
    $('#SearchShareDetails').owlCarousel({
        loop: true,
        margin: 10,
        items: 1,
        nav: false,
        freeDrag: false,
        autoplay: true,
        autoWidth: false,
        autoplayTimeout:10000,
        dots: true
    })
    


     activateTyped();
    if ($('.simple-marquee-container') && $('.simple-marquee-container').length) {
        $('.simple-marquee-container').SimpleMarquee();
    }

    $('.contact-bttn').click(function(e) {
        $('.contact-bttn').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });
       $("#closeOpenAc").click(function () {
          if ($("#openTradeBuble").hasClass("openFadeout")){
            if($('#homeOpenTrade').hasClass("active")){
              $('#homeOpenTrade').removeClass('active');
            }
            if ($('#openTradeBuble').hasClass("open")){
                $('#openTradeBuble').removeClass('open');
               }
            $("#openTradeBuble").removeClass("visible").addClass("openFadeout");
             $('.opentrade-back-drop').removeClass('show').addClass('hide');
             $('body').removeClass('opentradeDrop');
            $('.btn-trade-login').addClass('active');
        }
    });

    $('#homeOpenTrade').click(function(e) {
       $('.ad_block').removeClass('fadeOut').addClass('fadeIn').css("position","static");
             if($('#openTradeBuble').is(":visible")) {
                $('#openTradeBuble').removeClass('visible');
                $(this).removeClass('active');
                $('.btn-trade-login').addClass('active');
             }else{
                 if ($(this).hasClass("active")){
                  $(this).addClass('active');
                }else{
                  $(this).toggleClass('active');
                }
                $('#openTradeBuble').addClass('visible');
                $(".opentrade-back-drop").addClass('show');
                $('body').addClass('opentradeDrop');
             }
              if ($(this).hasClass("active")){
                $('.btn-trade-login').removeClass('active');
              }
             if ($(".home-open-account .btn.dropdown-toggle").hasClass("active")){
              $('.home-open-account .btn.dropdown-toggle').removeClass('active');
             }
        e.preventDefault();
    });
         
    $('#homeOpenTradeMob').click(function(e) {
      
            if($('#openTradeBuble').is(":visible")) {
                if ($('#openTradeBuble').hasClass("open")){
                  $('#openTradeBuble').removeClass('open');
                 }
                $('#openTradeBuble').removeClass('visible');
                $(this).removeClass('active');
             }else{

                $(this).toggleClass('active');
                $('#openTradeBuble').addClass('visible');
             }
        e.preventDefault();
      
    });
    $(".opentrade-back-drop").click(function () {
           $('#openTradeBuble').removeClass('visible');
           if ($('#openTradeBuble').hasClass("open")){
            $('#openTradeBuble').removeClass('open');
           }
            $(this).removeClass('show');
            $("#homeOpenTrade").removeClass('active');
            $('.btn-trade-login').addClass('active');
             $('body').removeClass('opentradeDrop');


      });

   if ($('#openTradeBuble').hasClass("open")){
      $('body').addClass('opentradeDrop');
       $(".opentrade-back-drop").addClass('show');
   }


    $('.search-btn').click(function(e) {
        $('.search-overlay').css('height', '100%');
        $("body").addClass('common-search');
         $('#commonSearch').focus();
        e.preventDefault();
    });
    $('#pageSearch').focus();
    $('.closebtn').click(function(e) {
        $('.search-overlay').css('height', '0%');
        $("body").removeClass('common-search');
        e.preventDefault();
    });

   
    $('.search-input input').blur(function() {
        if (!$(this).val()) {
            $(".serach-result").removeClass('active');
        }
    });
    $('.search-overlay .serach-result .table tbody tr').click(function() {
        location.href ='company_details.html'
    });
 
    
     $('.btn-trending-filter ').click(function(e) {
        $('.btn-trending-filter').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });
     function activateTyped(){
    Typed.new("#typed", {
        stringsElement: document.getElementById('typed-strings'),
        typeSpeed: 150,
        backDelay: 100,
        loop: true,
        contentType: 'html', 
        loopCount: null,
        callback: function() {},
        resetCallback: function() {}
    });
     Typed.new("#typed2", {
        stringsElement: document.getElementById('typed-strings2'),
        typeSpeed: 150,
        backDelay: 100,
        loop: true,
        contentType: 'html', 
        loopCount: null,
        callback: function() {},
        resetCallback: function() {}
    });

    var resetElement = document.querySelector('.reset');
    if (resetElement) {
        resetElement.addEventListener('click', function() {
            document.getElementById('typed')._typed.reset();
            document.getElementById('typed2')._typed.reset();
        });
    }

}

if ($('.criteria') && $('.criteria').length) {
       $('.criteria').selectric();
    }
var gettop = $('html').offset().top;
setTimeout(function() {
    $('#homeBuble.sip-bubble').css("visibility","visible").addClass('animated bounceIn');
    if(gettop<=50){
      $('.ad_block').addClass('animated fadeOut');
    }
    
 }, 10000);



if ($('.banner-text') && $('.banner-text').length) {
       var targetOffset = $(".banner-text").offset().top;
       var $w = $(window).scroll(function(){
        if ( $w.scrollTop() >= targetOffset ) {   
            $('.ad_block').removeClass('fadeOut').addClass('fadeIn').css("position","static");
        }

        if ( $w.scrollTop() >50 ) {   
          $('.ad_block img').css("opcity","0.4");
        }
    });
}


$('.menu-icon a').on('click', function(e) {
        e.preventDefault();
        $(".menu-content").toggleClass('open animated bounceIn');
    })



$("#tmpId").click(function(){
    $('#1').show();
    $('#2').hide();
});

$(window).click(function() {
  $('.main-nav li a.dropdown-toggle').removeClass('active');
  $('.primary-nav li a.dropdown-toggle').removeClass('active');
});

$('.vertical-floating-menu ul li.has-submenu a').click(function(){
    $(this).find('i').toggleClass('fa-angle-down fa-angle-up')
});

//vertical menu change bg

if ($('.wealth-management') && $('.wealth-management').length) {
       var targetOffsetWealth = $(".wealth-management").offset().top;
        targetOffsetWealth=targetOffsetWealth-180;
       var $w = $(window).scroll(function(){
        if ( $w.scrollTop() >= targetOffsetWealth ) {
            $('.vertical-floating-menu').addClass('change-bg');
        } 
    });
}
if ($('.derivatives') && $('.derivatives').length) {
       var targetOffsetDeri = $(".derivatives").offset().top;
        targetOffsetDeri=targetOffsetDeri-180;
       var $w = $(window).scroll(function(){
        if ( $w.scrollTop() >= targetOffsetDeri ) {
            $('.vertical-floating-menu').removeClass('change-bg');
        } 
    });
}
if ($('.currency') && $('.currency').length) {
       var targetOffsetCur = $(".currency").offset().top;
        targetOffsetCur=targetOffsetCur-180;
       var $w = $(window).scroll(function(){
        if ( $w.scrollTop() >= targetOffsetCur ) {
            $('.vertical-floating-menu').addClass('change-bg');
        } 
    });
}
if ($('.market-investment') && $('.market-investment').length) {
       var targetOffsetInvestment = $(".market-investment").offset().top;
        targetOffsetInvestment=targetOffsetInvestment-180;
       var $w = $(window).scroll(function(){
        if ( $w.scrollTop() >= targetOffsetInvestment ) {   
            $('.vertical-floating-menu').removeClass('change-bg');
        } 
    });
}

if ($('.portfolio-management') && $('.portfolio-management').length) {
       var targetOffsetPortfolio = $(".portfolio-management").offset().top;
        targetOffsetPortfolio=targetOffsetPortfolio-180;
       var $w = $(window).scroll(function(){
        if ( $w.scrollTop() >= targetOffsetPortfolio ) {
            $('.vertical-floating-menu').addClass('change-bg');
        } 
    });
}
if ($('.dept') && $('.dept').length) {
       var targetOffsetDept = $(".dept").offset().top;
        targetOffsetDept=targetOffsetDept-180;
       var $w = $(window).scroll(function(){
        if ( $w.scrollTop() >= targetOffsetDept ) {   
            $('.vertical-floating-menu').removeClass('change-bg');
        } 
    });
}
if ($('.gold-etf') && $('.gold-etf').length) {
       var targetOffsetetf = $(".gold-etf").offset().top;
        targetOffsetetf=targetOffsetetf-180;
       var $w = $(window).scroll(function(){
        if ( $w.scrollTop() >= targetOffsetetf ) {
            $('.vertical-floating-menu').addClass('change-bg');
        } 
    });
}
if ($('.ipo') && $('.ipo').length) {
       var targetOffsetIpo = $(".ipo").offset().top;
        targetOffsetIpo=targetOffsetIpo-180;
       var $w = $(window).scroll(function(){
        if ( $w.scrollTop() >= targetOffsetIpo ) {   
            $('.vertical-floating-menu').removeClass('change-bg');
        } 
    });
}

if ($('.corporate-governance') && $('.corporate-governance').length) {
       var targetOffsetGovernance = $(".corporate-governance").offset().top;
        targetOffsetGovernance=targetOffsetGovernance-180;
       var $w = $(window).scroll(function(){
        if ( $w.scrollTop() >= targetOffsetGovernance ) {   
            $('.vertical-floating-menu').addClass('change-bg');
        } 
    });
}
if ($('.appointment-letter') && $('.appointment-letter').length) {
       var targetOffsetAppointment = $(".appointment-letter").offset().top;
        targetOffsetAppointment=targetOffsetAppointment-180;
       var $w = $(window).scroll(function(){
        if ( $w.scrollTop() >= targetOffsetAppointment ) {   
            $('.vertical-floating-menu').removeClass('change-bg');
        } 
    });
}
if ($('.shareholding-pattern') && $('.shareholding-pattern').length) {
       var targetOffsetShareholding = $(".shareholding-pattern").offset().top;
        targetOffsetShareholding=targetOffsetShareholding-180;
       var $w = $(window).scroll(function(){
        if ( $w.scrollTop() >= targetOffsetShareholding ) {   
            $('.vertical-floating-menu').addClass('change-bg');
        } 
    });
}
if ($('.shareholder-information') && $('.shareholder-information').length) {
       var targetOffsetInformation = $(".shareholder-information").offset().top;
        targetOffsetInformation=targetOffsetInformation-180;
       var $w = $(window).scroll(function(){
        if ( $w.scrollTop() >= targetOffsetInformation ) {   
            $('.vertical-floating-menu').removeClass('change-bg');
        } 
    });
}

if ($('.unpaid-dividend-info') && $('.unpaid-dividend-info').length) {
       var targetOffsetUnpaid = $(".unpaid-dividend-info").offset().top;
        targetOffsetUnpaid=targetOffsetUnpaid-180;
       var $w = $(window).scroll(function(){
        if ( $w.scrollTop() >= targetOffsetUnpaid ) {   
           $('.vertical-floating-menu').addClass('change-bg');
        } 
    });
}
if ($('.investor-contact') && $('.investor-contact').length) {
       var targetOffsetInvestor = $(".investor-contact").offset().top;
        targetOffsetInvestor=targetOffsetInvestor-180;
       var $w = $(window).scroll(function(){
        if ( $w.scrollTop() >= targetOffsetInvestor ) {   
            $('.vertical-floating-menu').removeClass('change-bg');
        } 
    });
}
if ($('.announcement') && $('.announcement').length) {
       var targetOffsetAnnouncement = $(".announcement").offset().top;
        targetOffsetAnnouncement=targetOffsetAnnouncement-180;
       var $w = $(window).scroll(function(){
        if ( $w.scrollTop() >= targetOffsetAnnouncement ) {   
           $('.vertical-floating-menu').addClass('change-bg');
        } 
    });
}
if ($('.postal-ballot') && $('.postal-ballot').length) {
       var targetOffsetPostal = $(".postal-ballot").offset().top;
        targetOffsetPostal=targetOffsetPostal-180;
       var $w = $(window).scroll(function(){
        if ( $w.scrollTop() >= targetOffsetPostal ) {   
            $('.vertical-floating-menu').removeClass('change-bg');
        } 
    });
}
if ($('.about-geojit') && $('.about-geojit').length) {
       var targetOffabt = $(".about-geojit").offset().top;
        targetOffabt=targetOffabt;
       var $w = $(window).scroll(function(){
        if ( $w.scrollTop() >= targetOffabt ) {   
           $('.vertical-floating-menu li.has-submenu').addClass('active');
        } 
    });
}

if ($('.why-geojit') && $('.why-geojit').length) {
       var targetOffwhygj = $(".why-geojit").offset().top;
        targetOffwhygj=targetOffwhygj-180;
       var $w = $(window).scroll(function(){
        if ( $w.scrollTop() >= targetOffwhygj ) {   
           $('.vertical-floating-menu').addClass('change-bg');
        } 
    });
}
if ($('.milestones') && $('.milestones').length) {
       var targetOffsetMile= $(".milestones").offset().top;
        targetOffsetMile=targetOffsetMile;
       var $w = $(window).scroll(function(){
        if ( $w.scrollTop() >= targetOffsetMile ) {   
           $('.vertical-floating-menu').removeClass('change-bg');
        } 
    });
}
if ($('.bod') && $('.bod').length) {
       var targetOffsetBod= $(".bod").offset().top;
        targetOffsetBod=targetOffsetBod;
       var $w = $(window).scroll(function(){
        if ( $w.scrollTop() >= targetOffsetBod ) {   
           $('.vertical-floating-menu').addClass('change-bg');
        } 
    });
}
if ($('.management') && $('.management').length) {
       var targetOffsetMgmnt= $(".management").offset().top;
        targetOffsetMgmnt=targetOffsetMgmnt;
       var $w = $(window).scroll(function(){
        if ( $w.scrollTop() >= targetOffsetMgmnt ) {   
           $('.vertical-floating-menu').removeClass('change-bg');
        } 
    });
}
if ($('.company-updates') && $('.company-updates').length) {
       var targetOffsetCmpny = $(".company-updates").offset().top;
        targetOffsetCmpny=targetOffsetCmpny;
       var $w = $(window).scroll(function(){
        if ( $w.scrollTop() >= targetOffsetCmpny ) {   
           $('.vertical-floating-menu').addClass('change-bg');
        } 
    });
}
if ($('.csr-policy') && $('.csr-policy').length) {
       var targetOffsetCsr= $(".csr-policy").offset().top;
        targetOffsetCsr=targetOffsetCsr;
       var $w = $(window).scroll(function(){
        if ( $w.scrollTop() >= targetOffsetCsr ) {   
           $('.vertical-floating-menu').removeClass('change-bg');
        } 
    });
}

if ($('.new') && $('.new').length) {
       var targetOffsetNew= $(".new").offset().top;
        targetOffsetNew=targetOffsetNew;
       var $w = $(window).scroll(function(){
        if ( $w.scrollTop() >= targetOffsetNew ) {   
           $('.vertical-floating-menu').addClass('change-bg');
        } 
    });
}
if ($('.gallery') && $('.gallery').length) {
       var targetOffsetGal= $(".gallery").offset().top;
        targetOffsetGal=targetOffsetGal;
       var $w = $(window).scroll(function(){
        if ( $w.scrollTop() >= targetOffsetGal ) {   
           $('.vertical-floating-menu').removeClass('change-bg');
        } 
    });
}

if ($('.mf-faq') && $('.mf-faq').length) {
       var targetOffsetmffaq= $(".mf-faq").offset().top;
        targetOffsetmffaq=targetOffsetmffaq;
       var $w = $(window).scroll(function(){
        if ( $w.scrollTop() >= targetOffsetmffaq ) {   
           $('.vertical-floating-menu').addClass('change-bg');
        } 
    });
}
if ($('.mf-knowledge-base') && $('.mf-knowledge-base').length) {
       var targetOffsetmf_Knowledge= $(".mf-knowledge-base").offset().top;
        targetOffsetmf_Knowledge=targetOffsetmf_Knowledge;
       var $w = $(window).scroll(function(){
        if ( $w.scrollTop() >= targetOffsetmf_Knowledge ) {   
           $('.vertical-floating-menu').removeClass('change-bg');
        } 
    });
}

if ($('.mf-reaserch') && $('.mf-reaserch').length) {
       var targetOffsetmfreaserch= $(".mf-reaserch").offset().top;
        targetOffsetmfreaserch=targetOffsetmfreaserch;
       var $w = $(window).scroll(function(){
        if ( $w.scrollTop() >= targetOffsetmfreaserch ) {   
           $('.vertical-floating-menu').addClass('change-bg');
        } 
    });
}

if ($('.mf-invest') && $('.mf-invest').length) {
       var targetOffsetInvest= $(".mf-fund-explorer").offset().top;
        targetOffsetInvest=targetOffsetInvest;
       var $w = $(window).scroll(function(){
        if ( $w.scrollTop() >= targetOffsetInvest ) {   
           $('.vertical-floating-menu').removeClass('change-bg');
        } 
    });
}

if ($('.faq') && $('.faq').length) {
       var targetOffsetfaq= $(".faq").offset().top;
        targetOffsetDipo=targetOffsetfaq;
       var $w = $(window).scroll(function(){
        if ( $w.scrollTop() >= targetOffsetfaq ) {   
           $('.vertical-floating-menu').addClass('change-bg');
        } 
    });
}
if ($('.mutual-fund') && $('.mutual-fund').length) {
       var targetOffsetmf= $(".mutual-fund").offset().top;
        targetOffsetmf=targetOffsetmf;
       var $w = $(window).scroll(function(){
        if ( $w.scrollTop() >= targetOffsetmf ) {   
           $('.vertical-floating-menu').addClass('change-bg');
        } 
    });
}
if ($('.financial-tools') && $('.financial-tools').length) {
       var targetOffFt= $(".financial-tools").offset().top;
        targetOffFt=targetOffFt;
       var $w = $(window).scroll(function(){
        if ( $w.scrollTop() >= targetOffFt ) {   
           $('.vertical-floating-menu').removeClass('change-bg');
        } 
    });
}
if ($('.calculator') && $('.calculator').length) {
       var targetOffCal= $(".calculator").offset().top;
        targetOffCal=targetOffCal;
       var $w = $(window).scroll(function(){
        if ( $w.scrollTop() >= targetOffCal ) {   
           $('.vertical-floating-menu').addClass('change-bg');
        } 
    });
}
if ($('.motor') && $('.motor').length) {
       var targetOffMtor= $(".motor").offset().top;
        targetOffMtor=targetOffMtor;
       var $w = $(window).scroll(function(){
        if ( $w.scrollTop() >= targetOffMtor ) {   
           $('.vertical-floating-menu').addClass('change-bg');
        } 
    });
}
if ($('.health') && $('.health').length) {
       var targetOffHealth= $(".health").offset().top;
        targetOffHealth=targetOffHealth;
       var $w = $(window).scroll(function(){
        if ( $w.scrollTop() >= targetOffHealth ) {   
           $('.vertical-floating-menu').removeClass('change-bg');
        } 
    });
}
if ($('.womenCritical') && $('.womenCritical').length) {
       var targetOffCritical= $(".womenCritical").offset().top;
        targetOffCritical=targetOffCritical;
       var $w = $(window).scroll(function(){
        if ( $w.scrollTop() >= targetOffCritical ) {   
           $('.vertical-floating-menu').addClass('change-bg');
        } 
    });
}
if ($('.life-insurance') && $('.life-insurance').length) {
       var targetOfflife= $(".life-insurance").offset().top;
        targetOfflife=targetOfflife;
       var $w = $(window).scroll(function(){
        if ( $w.scrollTop() >= targetOfflife ) {   
           $('.vertical-floating-menu').removeClass('change-bg');
        } 
    });
}
$(window).scroll(function() {
    var getEndScroll=($(window).height() + $(window).scrollTop());
    getEndScroll=getEndScroll+300;
    if ($('body').height() <=getEndScroll ) {
        $('.vertical-floating-menu').removeClass('fadeIn change-bg');
    }
});


 $(".show-page-modal").click ( function(){
     var getId=$(this).attr('data-modal');
     $("#"+getId).show();
     $('body').addClass('open-page-modal');
});
 $(".back-page-modal").click ( function(){
  
   $('body').removeClass('open-page-modal');
     var getId=$(this).attr('data-modal');
     var getOuter=$(this).attr('data-modal-close');
     $("#"+getOuter).hide();
     $("#"+getId).show();
     $('body').addClass('open-page-modal');
});
 $(".hide-page-modal").click ( function(){
     var getId=$(this).attr('data-modal-hide');
     $("#"+getId).hide();
     $('body').removeClass('open-page-modal');
     if ($('.vimeo-wrapper') && $('.vimeo-wrapper').length) {
        $("#videoDesk").vimeo("unload");
      }
});
 $(".page-modal-overlay").click ( function(){
  $('body').removeClass('open-page-modal');
  $(".page-modal").hide();
 });


$('.vertical-floating-menu li:not(.has-submenu)  a,.boxed-nav li  a:not(.hasModal),#supportInterLinks li a,.selfiInterLink li:not(.select-selfi) a').click(function(event) {
    event.preventDefault();
    var link = this;
    $.smoothScroll({
        scrollTarget: link.hash,
        speed: 1000 ,
        offset: -100,

    });
}); 

$('.selfiInterLink li:not(.select-selfi) a').click(function(event) {
    event.preventDefault();
    var link = this;
    $.smoothScroll({
        scrollTarget: link.hash,
        speed: 1000 ,
        offset: -100,

    });
}); 

})

jQuery(document).ready(function($){


    var timelines = $('.cd-horizontal-timeline'),
        eventsMinDistance = 60;
        eventsMaxDistance = 60;

    (timelines.length > 0) && initTimeline(timelines);

    function initTimeline(timelines) {
        timelines.each(function(){
            var timeline = $(this),
                timelineComponents = {};
            //cache timeline components 
            timelineComponents['timelineWrapper'] = timeline.find('.events-wrapper');
            timelineComponents['eventsWrapper'] = timelineComponents['timelineWrapper'].children('.events');
            timelineComponents['fillingLine'] = timelineComponents['eventsWrapper'].children('.filling-line');
            timelineComponents['timelineEvents'] = timelineComponents['eventsWrapper'].find('a');
            timelineComponents['timelineDates'] = parseDate(timelineComponents['timelineEvents']);
            timelineComponents['eventsMinLapse'] = minLapse(timelineComponents['timelineDates']);
            timelineComponents['timelineNavigation'] = timeline.find('.cd-timeline-navigation');
            timelineComponents['eventsContent'] = timeline.children('.events-content');

            //assign a left postion to the single events along the timeline
            setDatePosition(timelineComponents, eventsMinDistance);
            //assign a width to the timeline
            var timelineTotWidth = setTimelineWidth(timelineComponents, eventsMinDistance);
            //the timeline has been initialize - show it
            timeline.addClass('loaded');

            //detect click on the next arrow
            timelineComponents['timelineNavigation'].on('click', '.next', function(event){
                event.preventDefault();
                updateSlide(timelineComponents, timelineTotWidth, 'next');
            });
            //detect click on the prev arrow
            timelineComponents['timelineNavigation'].on('click', '.prev', function(event){
                event.preventDefault();
                updateSlide(timelineComponents, timelineTotWidth, 'prev');
            });
            //detect click on the a single event - show new event content
            timelineComponents['eventsWrapper'].on('click', 'a', function(event){
                event.preventDefault();
                timelineComponents['timelineEvents'].removeClass('selected');
                $(this).addClass('selected');
                updateOlderEvents($(this));
                updateFilling($(this), timelineComponents['fillingLine'], timelineTotWidth);
                updateVisibleContent($(this), timelineComponents['eventsContent']);
            });

            //on swipe, show next/prev event content
            timelineComponents['eventsContent'].on('swipeleft', function(){
                var mq = checkMQ();
                ( mq == 'mobile' ) && showNewContent(timelineComponents, timelineTotWidth, 'next');
            });
            timelineComponents['eventsContent'].on('swiperight', function(){
                var mq = checkMQ();
                ( mq == 'mobile' ) && showNewContent(timelineComponents, timelineTotWidth, 'prev');
            });

            //keyboard navigation
            $(document).keyup(function(event){
                if(event.which=='37' && elementInViewport(timeline.get(0)) ) {
                    showNewContent(timelineComponents, timelineTotWidth, 'prev');
                } else if( event.which=='39' && elementInViewport(timeline.get(0))) {
                    showNewContent(timelineComponents, timelineTotWidth, 'next');
                }
            });
        });
    }

    function updateSlide(timelineComponents, timelineTotWidth, string) {
        //retrieve translateX value of timelineComponents['eventsWrapper']
        var translateValue = getTranslateValue(timelineComponents['eventsWrapper']),
            wrapperWidth = Number(timelineComponents['timelineWrapper'].css('width').replace('px', ''));
        //translate the timeline to the left('next')/right('prev') 
        (string == 'next') 
            ? translateTimeline(timelineComponents, translateValue - wrapperWidth + eventsMinDistance, wrapperWidth - timelineTotWidth)
            : translateTimeline(timelineComponents, translateValue + wrapperWidth - eventsMinDistance);
    }

    function showNewContent(timelineComponents, timelineTotWidth, string) {
        //go from one event to the next/previous one
        var visibleContent =  timelineComponents['eventsContent'].find('.selected'),
            newContent = ( string == 'next' ) ? visibleContent.next() : visibleContent.prev();

        if ( newContent.length > 0 ) { //if there's a next/prev event - show it
            var selectedDate = timelineComponents['eventsWrapper'].find('.selected'),
                newEvent = ( string == 'next' ) ? selectedDate.parent('li').next('li').children('a') : selectedDate.parent('li').prev('li').children('a');
            
            updateFilling(newEvent, timelineComponents['fillingLine'], timelineTotWidth);
            updateVisibleContent(newEvent, timelineComponents['eventsContent']);
            newEvent.addClass('selected');
            selectedDate.removeClass('selected');
            updateOlderEvents(newEvent);
            updateTimelinePosition(string, newEvent, timelineComponents);
        }
    }

    function updateTimelinePosition(string, event, timelineComponents) {
        //translate timeline to the left/right according to the position of the selected event
        var eventStyle = window.getComputedStyle(event.get(0), null),
            eventLeft = Number(eventStyle.getPropertyValue("left").replace('px', '')),
            timelineWidth = Number(timelineComponents['timelineWrapper'].css('width').replace('px', '')),
            timelineTotWidth = Number(timelineComponents['eventsWrapper'].css('width').replace('px', ''));
        var timelineTranslate = getTranslateValue(timelineComponents['eventsWrapper']);

        if( (string == 'next' && eventLeft > timelineWidth - timelineTranslate) || (string == 'prev' && eventLeft < - timelineTranslate) ) {
            translateTimeline(timelineComponents, - eventLeft + timelineWidth/2, timelineWidth - timelineTotWidth);
        }
    }

    function translateTimeline(timelineComponents, value, totWidth) {
        var eventsWrapper = timelineComponents['eventsWrapper'].get(0);
        value = (value > 0) ? 0 : value; //only negative translate value
        value = ( !(typeof totWidth === 'undefined') &&  value < totWidth ) ? totWidth : value; //do not translate more than timeline width
        setTransformValue(eventsWrapper, 'translateX', value+'px');
        //update navigation arrows visibility
        (value == 0 ) ? timelineComponents['timelineNavigation'].find('.prev').addClass('inactive') : timelineComponents['timelineNavigation'].find('.prev').removeClass('inactive');
        (value == totWidth ) ? timelineComponents['timelineNavigation'].find('.next').addClass('inactive') : timelineComponents['timelineNavigation'].find('.next').removeClass('inactive');
    }

    function updateFilling(selectedEvent, filling, totWidth) {
        //change .filling-line length according to the selected event
        var eventStyle = window.getComputedStyle(selectedEvent.get(0), null),
            eventLeft = eventStyle.getPropertyValue("left"),
            eventWidth = eventStyle.getPropertyValue("width");
        eventLeft = Number(eventLeft.replace('px', '')) + Number(eventWidth.replace('px', ''))/2;
        var scaleValue = eventLeft/totWidth;
        setTransformValue(filling.get(0), 'scaleX', scaleValue);
    }

    function setDatePosition(timelineComponents, min) {
        for (i = 0; i < timelineComponents['timelineDates'].length; i++) { 
            var distance = daydiff(timelineComponents['timelineDates'][0], timelineComponents['timelineDates'][i]),
                distanceNorm = Math.round(distance/timelineComponents['eventsMinLapse']) + 2;
            timelineComponents['timelineEvents'].eq(i).css('left', distanceNorm*min+'px');
        }
    }

    function setTimelineWidth(timelineComponents, width) {
        var timeSpan = daydiff(timelineComponents['timelineDates'][0], timelineComponents['timelineDates'][timelineComponents['timelineDates'].length-1]),
            timeSpanNorm = timeSpan/timelineComponents['eventsMinLapse'],
            timeSpanNorm = Math.round(timeSpanNorm) + 4,
            totalWidth = timeSpanNorm*width;
        timelineComponents['eventsWrapper'].css('width', totalWidth+'px');
        updateFilling(timelineComponents['eventsWrapper'].find('a.selected'), timelineComponents['fillingLine'], totalWidth);
        updateTimelinePosition('next', timelineComponents['eventsWrapper'].find('a.selected'), timelineComponents);
    
        return totalWidth;
    }

    function updateVisibleContent(event, eventsContent) {
        var eventDate = event.data('date'),
            visibleContent = eventsContent.find('.selected'),
            selectedContent = eventsContent.find('[data-date="'+ eventDate +'"]'),
            selectedContentHeight = selectedContent.height();

        if (selectedContent.index() > visibleContent.index()) {
            var classEnetering = 'selected enter-right',
                classLeaving = 'leave-left';
        } else {
            var classEnetering = 'selected enter-left',
                classLeaving = 'leave-right';
        }

        selectedContent.attr('class', classEnetering);
        visibleContent.attr('class', classLeaving).one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
            visibleContent.removeClass('leave-right leave-left');
            selectedContent.removeClass('enter-left enter-right');
        });
        eventsContent.css('height', selectedContentHeight+'px');
    }

    function updateOlderEvents(event) {
        event.parent('li').prevAll('li').children('a').addClass('older-event').end().end().nextAll('li').children('a').removeClass('older-event');
    }

    function getTranslateValue(timeline) {
        var timelineStyle = window.getComputedStyle(timeline.get(0), null),
            timelineTranslate = timelineStyle.getPropertyValue("-webkit-transform") ||
                timelineStyle.getPropertyValue("-moz-transform") ||
                timelineStyle.getPropertyValue("-ms-transform") ||
                timelineStyle.getPropertyValue("-o-transform") ||
                timelineStyle.getPropertyValue("transform");

        if( timelineTranslate.indexOf('(') >=0 ) {
            var timelineTranslate = timelineTranslate.split('(')[1];
            timelineTranslate = timelineTranslate.split(')')[0];
            timelineTranslate = timelineTranslate.split(',');
            var translateValue = timelineTranslate[4];
        } else {
            var translateValue = 0;
        }

        return Number(translateValue);
    }

    function setTransformValue(element, property, value) {
        element.style["-webkit-transform"] = property+"("+value+")";
        element.style["-moz-transform"] = property+"("+value+")";
        element.style["-ms-transform"] = property+"("+value+")";
        element.style["-o-transform"] = property+"("+value+")";
        element.style["transform"] = property+"("+value+")";
    }

    //based on http://stackoverflow.com/questions/542938/how-do-i-get-the-number-of-days-between-two-dates-in-javascript
    function parseDate(events) {
        var dateArrays = [];
        events.each(function(){
            var singleDate = $(this),
                dateComp = singleDate.data('date').split('T');
            if( dateComp.length > 1 ) { //both DD/MM/YEAR and time are provided
                var dayComp = dateComp[0].split('/'),
                    timeComp = dateComp[1].split(':');
            } else if( dateComp[0].indexOf(':') >=0 ) { //only time is provide
                var dayComp = ["2000", "0", "0"],
                    timeComp = dateComp[0].split(':');
            } else { //only DD/MM/YEAR
                var dayComp = dateComp[0].split('/'),
                    timeComp = ["0", "0"];
            }
            var newDate = new Date(dayComp[2], dayComp[1]-1, dayComp[0], timeComp[0], timeComp[1]);
            dateArrays.push(newDate);
        });
        return dateArrays;
    }

    function daydiff(first, second) {
        return Math.round((second-first));
    }

    function minLapse(dates) {
        //determine the minimum distance among events
        var dateDistances = [];
        for (i = 1; i < dates.length; i++) { 
            var distance = daydiff(dates[i-1], dates[i]);
            dateDistances.push(distance);
        }
        return Math.min.apply(null, dateDistances);
    }

    /*
        How to tell if a DOM element is visible in the current viewport?
        http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
    */
    function elementInViewport(el) {
        var top = el.offsetTop;
        var left = el.offsetLeft;
        var width = el.offsetWidth;
        var height = el.offsetHeight;

        while(el.offsetParent) {
            el = el.offsetParent;
            top += el.offsetTop;
            left += el.offsetLeft;
        }

        return (
            top < (window.pageYOffset + window.innerHeight) &&
            left < (window.pageXOffset + window.innerWidth) &&
            (top + height) > window.pageYOffset &&
            (left + width) > window.pageXOffset
        );
    }

    function checkMQ() {
        //check if mobile or desktop device
        return window.getComputedStyle(document.querySelector('.cd-horizontal-timeline'), '::before').getPropertyValue('content').replace(/'/g, "").replace(/"/g, "");
    }

    (function() {

  var bodyEl = document.body;
      if ($('.sidebar-overlay') && $('.sidebar-overlay').length) {
        var content = document.querySelector( '.sidebar-overlay' );
      } if ($('#open-button') && $('#open-button').length) {
         var openbtn = document.getElementById( 'open-button' );
      }  if ($('#close-button') && $('#close-button').length) {
        var closebtn = document.getElementById( 'close-button');
      }
    isOpen = false;

  function init() {
    initEvents();
  }

  function initEvents() {
    if( openbtn ) {
        openbtn.addEventListener( 'click', toggleMenu );
      }
    if( closebtn ) {
      closebtn.addEventListener( 'click', toggleMenu );
    }

    // close the menu element if the target it´s not the menu element or one of its descendants..

  if( content ) {
      content.addEventListener( 'click', function(ev) {
        var target = ev.target;
        if( isOpen && target !== openbtn ) {
          toggleMenu();
        }
      } );
    }
  }

  function toggleMenu() {
    if( isOpen ) {
      classie.remove( bodyEl, 'show-menu' );
    }
    else {
      classie.add( bodyEl, 'show-menu' );
    }
    isOpen = !isOpen;
  }

  init();

})();

 $("#mobileSearch").click ( function(e){
   $('body').removeClass('show-menu');
   $('.search-overlay').css('height', '100%');
    e.preventDefault();
});

$(".piId").click(function(){
    $('#TradeExpand').fadeIn();
    $('#onlineTradeFeature').fadeOut();
});

$("#clId").click(function(){
    $('#onlineTradeFeature').fadeIn();
    $('#TradeExpand').fadeOut();
});

$(".c-future").click(function(){
   window.location=$(this).find("a").attr("href"); return false;
});
$(".s-retire").click(function(){
   window.location=$(this).find("a").attr("href"); return false;
});
$(".w-creation").click(function(){
   window.location=$(this).find("a").attr("href"); return false;
});
$(".b-property").click(function(){
   window.location=$(this).find("a").attr("href"); return false;
});

 $('.goal-icon').click(function(e) {
        $('.goal-icon').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });

$("#CfutureId").click(function(){
    $('#goal-step2').show();
    $('#goal-step1').hide();
});

$("#backOne").click(function(){
    $('#goal-step1').show();
    $('#goal-step2').hide();
});

$("#belowId").click(function(){
    $('#goal-step3').show();
    $('#goal-step2').hide();
});
$("#investmentMonth").click(function(){
    $('#goal-step4').show();
    $('#goal-step3').hide();
});

$("#backTwo").click(function(){
    $('#goal-step2').show();
    $('#goal-step3').hide();
});
$("#mailPlan").click(function(){
    $('#goal-step5').show();
    $('#goal-step4').hide();
});
$("#backtoGoal").click(function(){
    $('#goal-step1').show();
    $('#goal-step5').hide();
});

$("#mobileFloatmenu").click(function(){
  $('body').toggleClass('showMobileFloat');
    
});
$('#bseClick').on('click',function(){
  $('#nse').hide();
  $('#bse').show();
        
});

$('#nseClick').on('click',function(){
  $('#bse').hide();
  $('#nse').show();
        
});
$('#nseTreand').on('click',function(){
     $('#bseTreanding').hide();
   $('#nseTreanding').show();
        
});
$('#bseTreand').on('click',function(){
   $('#bseTreanding').show();
    $('#nseTreanding').hide();
        
});


$('.search-icon .searchBranch').on('click', function(e) {
      e.preventDefault();
       $('.search-overlay-container').css('z-index', '1004');
      $(".serach-result").addClass('active');
      $("#search-result-overlay-1").addClass('search-result-overlay-1');
      $('body').css('overflow', 'hidden');

})
$('.search-icon .searchMutal').on('click', function(e) {
    e.preventDefault();
     $('.search-overlay-container').css('z-index', '1004');
      $(".serach-result").addClass('active');
        $(".fadeOverlay").addClass('secondary-overlay');
      $("body").addClass('mutualsearch');
    
})
$(".fadeOverlayDrop").click ( function(){
  $(".serach-result").removeClass('active');
  $('.search-input input').val("");
   $("body").removeClass('mutualsearch');
 });
$("#search-result-overlay-1").click ( function(){
  $(".serach-result").removeClass('active');
  $('.search-input input').val("");
 $("#search-result-overlay-1").removeClass('search-result-overlay-1');
 $('.search-overlay-container').css('z-index', '1001');
  $('body').css('overflow', 'auto');
 });


$('.search-icon .searchCompany').on('click', function(e) {
      e.preventDefault();
      $(".serach-result").addClass('active');
      $("#search-result-overlay-2").addClass('search-result-overlay-2');
       $(".search-overlay").addClass('secondary-overlay');
      
})

$("#search-result-overlay-2").click ( function(){
  $(".serach-result").removeClass('active');
  $('.search-input input').val("");
   $("#search-result-overlay-2").removeClass('search-result-overlay-2');
   $(".search-overlay").removeClass('secondary-overlay');
    $(".common-search").removeClass('active');
 });

function modalAnim(anim) {
    $('.modal .modal-dialog').attr('class', 'modal-dialog  ' + anim + '  animated');
};
$('.customFade').on('show.bs.modal', function (e) {
  var anim = 'fadeIn';
      modalAnim(anim);
})
$('.customFade').on('hide.bs.modal', function (e) {
  var anim = 'fadeOut';
      modalAnim(anim);
})
$('#goToFinancial').on('click', function(e) {
     
      window.location.href = 'financial-solutions.html';
       e.preventDefault();
})
   $("#contact-media").click(function(){
    $('#contact-general').fadeOut();
     $('#media-contact').fadeIn();
   $('#investorgrievance').fadeOut(300);
  });
  $("#general-contact").click(function(){
     $('#media-contact').fadeOut();
     $('#contact-general').fadeIn();
   $('#investorgrievance').fadeOut(300);
      
  });
 
$("#showinvestorgrievance").click(function(){
     $('#investorgrievance').fadeIn(300);
    $('#contact-general').fadeOut();
   $('#media-contact').fadeOut();
   
   });

  $("#pageSearch").keyup(function() {
    if($(this).val().length == 0) {
       $(".serach-result").removeClass('active');
      $('.search-input input').val("");
     $("#search-result-overlay-1").removeClass('search-result-overlay-1');
     $('.search-overlay-container').css('z-index', '1001');
      $('body').css('overflow', 'auto');
    }else if ($(this).val().length >= 3){
          $('.search-overlay-container').css('z-index', '1004');
          $(".serach-result").addClass('active');
          $("#search-result-overlay-1").addClass('search-result-overlay-1');
          $('body').css('overflow', 'hidden');
    }
     
});

  $("#commonSearch").keyup(function() {
    if($(this).val().length == 0) {
       $(".serach-result").removeClass('active');
  $('.search-input input').val("");
   $("#search-result-overlay-2").removeClass('search-result-overlay-2');
   $(".search-overlay").removeClass('secondary-overlay');
    $(".common-search").removeClass('active');
    }else if ($(this).val().length >= 3){
          $(".serach-result").addClass('active');
          $("#search-result-overlay-2").addClass('search-result-overlay-2');
          $(".search-overlay").addClass('secondary-overlay');
    }
});
    $("#mutualSearch").keyup(function() {
   if($(this).val().length == 0) {
       $(".serach-result").removeClass('active');
      $('.search-input input').val("");
     $(".fadeOverlay").removeClass('secondary-overlay');
     $('.search-overlay-container').css('z-index', '1001');
      $('body').css('overflow', 'auto');
    }else if ($(this).val().length >= 3){
           $('.search-overlay-container').css('z-index', '1004');
      $(".serach-result").addClass('active');
        $(".fadeOverlay").addClass('secondary-overlay');
      $("body").addClass('mutualsearch');
    }
});

$(".applyClickCareer").click(function(){
   $('.hideonapply').fadeOut();
     $('.carrer-apply-form').fadeIn();
   });
  $(".backbtn").click(function(){
   $('.carrer-apply-form').fadeOut();
   $('.hideonapply').fadeIn();
    });
setTimeout(function() {
    $('.slideUpModal').slideToggle("slow");
     $(".slideUpModalDrop").addClass('in');
  }, 3000); 

$(".slideUpModalDrop,.slideUpModalClose").click(function(){
     $('.slideUpModal').slideToggle("slow");
     $(".slideUpModalDrop").removeClass('in');
   });



$("#selectGoal").click(function(){
     $('#step-goal-modal').modal('show');
   });
$("#fundExpmodalAction").click(function(){
     $('#fundExpmodal').fadeIn(300);
   });
$('.fadeOverlayClose').click(function(e) {
  var getId=$(this).attr('data-close');

         $('#'+getId).fadeOut();
        $("body").removeClass('common-search');
        e.preventDefault();
    });
$("#companyFinModalAction").click(function(){
     $('#companyFinModal').fadeIn(300);
   });
$("#downloadInv").click(function(){
     $('#downloadInvpdf').fadeIn(300);
   });

$("#sharePatternModalAction").click(function(){
     $('#sharePatternModal').fadeIn(300);
   });

$(".in-page-modal-open").click(function(){
  var getIdOpen=$(this).attr('data-open');
  var getIdHide=$(this).attr('data-hide');
    $('#'+getIdHide).fadeOut();
    $('.in-page').fadeOut();
    $('.floating-menu-container').fadeOut();
   $('#'+getIdOpen).fadeIn();

   });
$(".in-page-close").click(function(){
    var getIdOpen=$(this).attr('data-open');
     $('#'+getIdOpen).fadeIn();
      $('.in-page').fadeOut();
      $('.floating-menu-container').fadeIn();
  });

$(document).on('click', '.modal-backdrop', function() {
  if($('#step-goal-modal').is(':visible')){
     $('#step-goal-modal').modal('hide');
  }
   
});

var $myGroup = $('#verticalFloingMenu');
$myGroup.on('show.bs.collapse','.collapse', function() {
    $myGroup.find('.collapse.in').collapse('hide');
});

$('.close-footermodal').click(function(e) {
  var getId=$(this).attr('data-close');

         $('#'+getId).fadeOut();
        $("body").removeClass('hidebodyscroll');
        e.preventDefault();
    });

$("#showdisclaimer").click(function(){
     $('#disclaimer').fadeIn(300);
   $('body').addClass("hidebodyscroll");
   
   });

$("#showprivacypolicy").click(function(){
     $('#privacypolicy').fadeIn(300);
   $('body').addClass("hidebodyscroll");
   
   });

$("#showdisclosure").click(function(){
     $('#disclosure').fadeIn(300);
   $('body').addClass("hidebodyscroll");
   
   });

$("#showresearchdisclaimer").click(function(){
     $('#researchdisclaimer').fadeIn(300);
   $('body').addClass("hidebodyscroll");
   
   });

$("#showformats").click(function(){
     $('#formats').fadeIn(300);
   $('body').addClass("hidebodyscroll");
   
   });




$('#selectcountry').change(function() {
   var valCountry=$('#selectcountry :selected').text();
   
   if(valCountry=="India"){
    $('#state').fadeIn(300);
    $('#country').fadeOut(300);
   }
    else if(valCountry=="International"){
    $('#state').fadeOut(300);
    $('#country').fadeIn(300);
   }
              
});

$('#openOnloneBrok').on('click',function(){
  $('#brokFees').modal('show');  
        
});
$('.clear-search a').on('click',function(){
  $(this).closest(".recent-search").find('ul li').empty();
        
});

$("#GainerModalAction").click(function(){
     $('#GainerModal').fadeIn(300);
});
   $("#TopModalAction").click(function(){
     $('#TopModal').fadeIn(300);
   });
    $(".cd-dropdown-menu .dropdown-item").click(function(){
       var getId=$(this).attr('data-open');
       $('.company-datas').fadeOut();
         $('#'+getId).fadeIn();
          $('.cd-dropdown-menu .dropdown-item').removeClass('active')
          $(this).addClass('active')

   });

    setTimeout(function() {
    $('.cd-dropdown-menu-drop').fadeOut(800);
    $('.cd-ham-menu.dropdown').removeClass('open');
  }, 5000); 

$(".cd-dropdown-menu-drop").click(function(){

     $(this).fadeOut(800);
});
$('#wtch-video').owlCarousel({
        loop: true,
        margin: 10,
        items: 1,
        nav: true,
        freeDrag: false,
        autoplay: true,
        autoWidth: false,
        animateIn: 'fadeIn', // add this
        animateOut: 'fadeOut', // and this
        navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
    })



});





