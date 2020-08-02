//wow animation

var wow = new WOW({
    boxClass: 'wow', // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset: 110, // distance to the element when triggering the animation (default is 0)
    mobile: true, // trigger animations on mobile devices (default is true)
    live: true, // act on asynchronously loaded content (default is true)
    callback: function (box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
});
wow.init();


//show/hide

$("#point1").click(function () {
    $("#pointa").show();
    $("#main-points").hide();
    $('#pointa').addClass('animated fadeIn');
    $('html, body').animate({
        scrollTop: $(".problem-solving").offset().top - 150
    }, 1000);
});
$("#back1").click(function () {
    $("#pointa").hide();
    $("#main-points").show();
    $('#main-points').addClass('animated fadeIn');
     $("#overlay2").hide();
});
$("#point2").click(function () {
    $("#pointb").show();
    $("#main-points").hide();
    $('#pointb').addClass('animated fadeIn');
    $('html, body').animate({
        scrollTop: $(".problem-solving").offset().top - 150
    }, 1000);
});
$("#back2").click(function () {
    $("#pointb").hide();
    $("#main-points").show();
    $('#main-points').addClass('animated fadeIn');
});
$("#point3").click(function () {
    $("#pointc").show();
    $("#main-points").hide();
    $('#pointc').addClass('animated fadeIn');
    $('html, body').animate({
        scrollTop: $(".problem-solving").offset().top - 150
    }, 1000);
});
$("#back3").click(function () {
    $("#pointc").hide();
    $("#main-points").show();
    $('#main-points').addClass('animated fadeIn');
});
$("#point4").click(function () {
    $("#pointd").show();
    $("#main-points").hide();
    $('#pointd').addClass('animated fadeIn');
    $('html, body').animate({
        scrollTop: $(".problem-solving").offset().top - 150
    }, 1000);
});
$("#back4").click(function () {
    $("#pointd").hide();
    $("#main-points").show();
    $('#main-points').addClass('animated fadeIn');
});
$("#point5").click(function () {
    $("#pointe").show();
    $("#main-points").hide();
    $('#pointe').addClass('animated fadeIn');
    $('html, body').animate({
        scrollTop: $(".problem-solving").offset().top - 150
    }, 1000);
});
$("#back5").click(function () {
    $("#pointe").hide();
    $("#main-points").show();
    $('#main-points').addClass('animated fadeIn');
});

/*pop2*/

$("#help-point1").click(function () {
    $("#help-pointa").show();
    $("#main-help").hide();
    $('#help-pointa').addClass('animated fadeIn');
});
$("#help-back1").click(function () {
    $("#help-pointa").hide();
    $("#main-help").show();
    $('#main-help').addClass('animated fadeIn');
});

$("#help-point2").click(function () {
    $("#help-pointb").show();
    $("#main-help").hide();
    $('#help-pointb').addClass('animated fadeIn');
});
$("#help-back2").click(function () {
    $("#help-pointb").hide();
    $("#main-help").show();
    $('#main-help').addClass('animated fadeIn');
});

$("#help-point3").click(function () {
    $("#help-pointc").show();
    $("#main-help").hide();
    $('#help-pointc').addClass('animated fadeIn');
});
$("#help-back3").click(function () {
    $("#help-pointc").hide();
    $("#main-help").show();
    $('#main-help').addClass('animated fadeIn');
});

$("#help-point4").click(function () {
    $("#help-pointd").show();
    $("#main-help").hide();
    $('#help-pointd').addClass('animated fadeIn');
});
$("#help-back4").click(function () {
    $("#help-pointd").hide();
    $("#main-help").show();
    $('#main-help').addClass('animated fadeIn');
});

$("#help-point5").click(function () {
    $("#help-pointe").show();
    $("#main-help").hide();
    $('#help-pointe').addClass('animated fadeIn');
});
$("#help-back5").click(function () {
    $("#help-pointe").hide();
    $("#main-help").show();
    $('#main-help').addClass('animated fadeIn');
});

$("#help-point6").click(function () {
    $("#help-pointf").show();
    $("#main-help").hide();
    $('#help-pointf').addClass('animated fadeIn');
});
$("#help-back6").click(function () {
    $("#help-pointf").hide();
    $("#main-help").show();
    $('#main-help').addClass('animated fadeIn');
});

$("#help-point7").click(function () {
    $("#help-pointg").show();
    $("#main-help").hide();
    $('#help-pointg').addClass('animated fadeIn');
});
$("#help-back7").click(function () {
    $("#help-pointg").hide();
    $("#main-help").show();
    $('#main-help').addClass('animated fadeIn');
});

$("#help-point8").click(function () {
    $("#help-pointh").show();
    $("#main-help").hide();
    $('#help-pointh').addClass('animated fadeIn');
});
$("#help-back8").click(function () {
    $("#help-pointh").hide();
    $("#main-help").show();
    $('#main-help').addClass('animated fadeIn');
});

// mobile menu

$("#more-panel").click(function () {
    $(".custom-drops").toggle();
});

//header panels 

function panelOne() {
    var r = document.getElementById("que-ask");
    var s = document.getElementById("question-ask");
    var t = document.getElementById("free-con");
    var v = document.getElementById("req-quote");
    var x = document.getElementById("overlay");
    var y = document.getElementById("request-panel");
    var z = document.getElementById("free-consult");
    if (x.style.display === "" || x.style.display === "none" && y.style.display === "" || y.style.display === "none") {
        x.style.display = "block";
        y.style.display = "block";
        z.style.display = "none";
       s.style.display = "none";
        v.style.color = "#439FE0";
        t.style.color = "#4C4C4C";
        r.style.color = "#4C4C4C";
    } else {
        x.style.display = "none";
        y.style.display = "none";
        s.style.display = "none";
        v.style.color = "#4C4C4C";
    }
}

function panelTwo() {
    var r = document.getElementById("que-ask");
    var s = document.getElementById("question-ask");
    var t = document.getElementById("req-quote");
    var v = document.getElementById("free-con");
    var x = document.getElementById("overlay");
    var y = document.getElementById("free-consult");
    var z = document.getElementById("request-panel");
    if (x.style.display === "" || x.style.display === "none" && y.style.display === "" || y.style.display === "none") {
        x.style.display = "block";
        y.style.display = "block";
        z.style.display = "none";
        s.style.display = "none";
        v.style.color = "#439FE0";
        t.style.color = "#4C4C4C";
         r.style.color = "#4C4C4C";
    } else {
        x.style.display = "none";
        y.style.display = "none";
        s.style.display = "none";
        v.style.color = "#4C4C4C";
    }
}

function panelThree() {
     var r = document.getElementById("free-con");
    var s = document.getElementById("free-consult");
    var t = document.getElementById("req-quote");
    var v = document.getElementById("que-ask");
    var x = document.getElementById("overlay");
    var y = document.getElementById("question-ask");
    var z = document.getElementById("request-panel");
    if (x.style.display === "" || x.style.display === "none" && y.style.display === "" || y.style.display === "none") {
        x.style.display = "block";
        y.style.display = "block";
        z.style.display = "none";
        s.style.display = "none";
        v.style.color = "#439FE0";
        t.style.color = "#4C4C4C";
        r.style.color = "#4C4C4C";
    } else {
        x.style.display = "none";
        y.style.display = "none";
        s.style.display = "none";
        v.style.color = "#4C4C4C";
    }
}

function OverlayClose() {
    var r = document.getElementById("que-ask");
     var s = document.getElementById("question-ask");
    var t = document.getElementById("free-con");
    var v = document.getElementById("req-quote");
    var x = document.getElementById("overlay");
    var y = document.getElementById("request-panel");
    var z = document.getElementById("free-consult");
    x.style.display = "none";
    y.style.display = "none";
    z.style.display = "none";
    s.style.display = "none";
    v.style.color = "#4C4C4C";
    t.style.color = "#4C4C4C";
    r.style.color = "#4C4C4C";
}


// contact form 1

  $(function () {
         
         $('#contact-form-question').validator();
         
         $('#contact-form-question').on('submit', function (e) {
         if (!e.isDefaultPrevented()) {
             var url = "contact.php";
             
         
             $.ajax({
                 type: "POST",
                 url: url,
                 data: $(this).serialize(),
                 success: function (data)
                 {
                     var messageAlert = 'alert-' + data.type;
                     var messageText = data.message;
         
                     var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                     if (messageAlert && messageText) {
                         $('#contact-form-question').find('.messages').html(alertBox);
                         $('#contact-form-question')[0].reset();
                         grecaptcha.reset();
                     }
                 }
             });
             return false;
         }
         })
         });

  // contact form 2

    $(function () {
         
         $('#contact-form-consult').validator();
         
         $('#contact-form-consult').on('submit', function (e) {
         if (!e.isDefaultPrevented()) {
             var url = "contact.php";
             
         
             $.ajax({
                 type: "POST",
                 url: url,
                 data: $(this).serialize(),
                 success: function (data)
                 {
                     var messageAlert = 'alert-' + data.type;
                     var messageText = data.message;
         
                     var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                     if (messageAlert && messageText) {
                         $('#contact-form-consult').find('.messages').html(alertBox);
                         $('#contact-form-consult')[0].reset();
                         grecaptcha.reset();
                     }
                 }
             });
             return false;
         }
         })
         });



 // contact form 3
   $(function () {
         
         $('#contact-form-request').validator();
         
         $('#contact-form-request').on('submit', function (e) {
         if (!e.isDefaultPrevented()) {
             var url = "contact.php";
             
         
             $.ajax({
                 type: "POST",
                 url: url,
                 data: $(this).serialize(),
                 success: function (data)
                 {
                     var messageAlert = 'alert-' + data.type;
                     var messageText = data.message;
         
                     var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                     if (messageAlert && messageText) {
                         $('#contact-form-request').find('.messages').html(alertBox);
                         $('#contact-form-request')[0].reset();
                         grecaptcha.reset();
                     }
                 }
             });
             return false;
         }
         })
         });


 // contact form 4

  $(function () {
         
         $('#contact-form-main').validator();
         
         $('#contact-form-main').on('submit', function (e) {
         if (!e.isDefaultPrevented()) {
             var url = "contact.php";
             
         
             $.ajax({
                 type: "POST",
                 url: url,
                 data: $(this).serialize(),
                 success: function (data)
                 {
                     var messageAlert = 'alert-' + data.type;
                     var messageText = data.message;
         
                     var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                     if (messageAlert && messageText) {
                         $('#contact-form-main').find('.messages').html(alertBox);
                         $('#contact-form-main')[0].reset();
                         grecaptcha.reset();
                     }
                 }
             });
             return false;
         }
         })
         });


   $(function () {
         
         $('#download-brochure').validator();
         
         $('#download-brochure').on('submit', function (e) {
            console.log('#download-brochure');
         if (!e.isDefaultPrevented()) {
             var url = "mail-brouchure.php";
             var email = $("#email").val();
             var category = $("#category").val();
             $.ajax({
                 type: "POST",
                 url: url,
                 data: {
                    category:category,
                    email: email
                  },
                                
                 success: function (data)
                 {
					 console.log(data);
					 var obj = JSON.parse(data)
                     var messageAlert = 'alert-' + obj.type;
                     var messageText = obj.message;
					console.log(messageAlert);
                         console.log(messageText);
                     var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable" style="width:100%;"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                     if (messageAlert && messageText) {
                         $('#download-brochure').find('.messages').html(alertBox);
                         $('#download-brochure')[0].reset();
                     }
                 }
             });
             return false;
         }
         })
});