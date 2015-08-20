$(document).ready(function () {
  // set body id and class
  var pathname = window.location.pathname;
  var id = window.location.pathname.split("/")[1];
  //var bodyClass = pathname.replace(/\//g, " ");
  var bodyClass = window.location.pathname.split("/")[2];
  //var selectedURI = window.location.pathname;
  // set id
  $("body").attr("id",id);
  if ( $("body").attr("id") === "") {
      $("body").attr("id","home");
  }
  // set classes
  $("body").addClass(bodyClass);
  if ( $("body").attr("class") == undefined) {
      $("body").addClass("home");
  }
  //$("section").addClass("section");
  // add hash class to body
  var hash = window.location.hash.substring(1);
  if(typeof(hash) != undefined && hash !== null) {
    $("body").addClass(hash);
  }

  // open external links in new window / tab
  $("a[href^='http']").attr("target","_blank");


  // hash link events
  $('a[href^="#"]').click(function(e){
    e.preventDefault();
    //$video.pause();
    $("div.modal").fadeOut(300);
    $("section").css("opacity", 1);
    $target = $(this).attr('href');
    if ($(this).attr('href') == '#') {
      $("body").addClass("home");
      $('html, body').stop().animate({
        scrollTop: $('body').offset().top
      //}, 800, function(){location.hash = $target;});
      }, 800);
    } else if ($(this).attr('href') == '#more') {
      $('div.more').fadeOut('fast');
      $(this).next('div.more').fadeToggle('fast');
    } else if ($(this).attr('href') == '#contact') {
      $("#emailer").toggleClass('active');
      //$('input[name="url"]').focus();
    } else {
      $("body").removeClass().addClass(hash);
      $('html, body').stop().animate({
        scrollTop: $($target).offset().top
      //}, 800,function(){location.hash = $target});
      }, 800);
    }
    return false;
  });


if ($('body').width() > 767) {
  //$('section').prepend('<img src="/images/image-unit" />');
  // cache the window object
  $window = $(window);
  // do lots of scrolling stuff
  $(window).scroll(function(){
    //$(".modal").remove();
    //$ajaxRequest = null;
    $(".more").fadeOut('fast');
    //$("div#emailer").removeClass('active');
    $('section').each(function(){
      // desktop only
      //if(! navigator.userAgent.match(/mobile/i)) {
        // parallax bg
         if ($(this).attr('data-speed') == undefined) {
        $(this).attr("data-speed","4");
        }
        var scrollTop = $(window).scrollTop(),
        offset = $(this).offset().top,
        distance = (offset - scrollTop);
        var yPos = -(distance / $(this).data('speed')); // per section
        bgPos = Math.round(yPos);
        var coords = bgPos + 'px';
        $(this).css({ backgroundPositionY: coords });
      //}
      // update page title
      if($(this).offset().top < window.pageYOffset + 10 
        && $(this).offset().top + $(this).height() > window.pageYOffset + 10) {
        $pageTitle = $(this).children("h2:first").text();
        //document.title = 'Public Princeton' + $pageTitle;
        $id = $(this).attr('id');
        $('body').removeClass().addClass($id);
        //location.hash = $(this).attr('id');
        // highlight menu
        $('menu a.selected').removeClass('selected');
      }
    });
  });
}

// end jQuery



//Google Map Skin - Get more at http://snazzymaps.com/
var myOptions = {
    zoom: 18,
    center: new google.maps.LatLng(40.35051, -74.66009),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    disableDefaultUI: true,
    styles: [{
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{
            "color": "#000000"
        }, {
            "lightness": 17
        }]
    }, {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [{
            "color": "#ff6a00"
        }, {
            "lightness": 20
        }]
    }, {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [{
            "color": "#000000"
        }, {
            "lightness": 17
        }]
    }, {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [{
            "color": "#000000"
        }, {
            "lightness": 29
        }, {
            "weight": 0.2
        }]
    }, {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [{
            "color": "#000000"
        }, {
            "lightness": 18
        }]
    }, {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [{
            "color": "#000000"
        }, {
            "lightness": 16
        }]
    }, {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [{
            "color": "#000000"
        }, {
            "lightness": 21
        }]
    }, {
        "elementType": "labels.text.stroke",
        "stylers": [{
            "visibility": "on"
        }, {
            "color": "#fffcfc"
        }, {
            "lightness": 30
        }]
    }, {
        "elementType": "labels.text.fill",
        "stylers": [{
            "saturation": 36
        }, {
            "color": "#000000"
        }, {
            "lightness": 20
        }]
    }, {
        "elementType": "labels.icon",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [{
            "color": "#000000"
        }, {
            "lightness": 19
        }]
    }, {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [{
            "color": "#000000"
        }, {
            "lightness": 20
        }]
    }, {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [{
            "color": "#000000"
        }, {
            "lightness": 17
        }, {
            "weight": 1.2
        }]
    }]
};

var map = new google.maps.Map(document.getElementById('map'), myOptions);
var marker = new google.maps.Marker({
    position: map.getCenter(),
    map: map,
    icon: "img/rings004.png"
});





$( ".toggle" ).click(function() {

  $("#container").toggleClass( "gh-show-nav" );
});

$('.toggle').click(function() {
  $(this).toggleClass('active');
});












/*//////////END//////////////*/

});
