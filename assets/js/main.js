//		Title: Arfa - One Page Corporate and Business Template
//		Author: Avabil
//		version: 1.0

//filterizr enable
jQuery(window).load(function() {

     var $filterizr = $('.filterizr__elements');
     if($filterizr.length) {
      var $filterizrControls = $('.filterizr__controls');
      $filterizr.filterizr();
      $filterizrControls.children('li').click(function() {
        $filterizrControls.find('li.active').removeClass('active');
        $(this).addClass('active');
      });
     }

});


// responsive menubar button 
$(function(){
	$('header .menubar i').on("click", function() {
		$('header nav').toggle(300);
	});
});


//gmaps function
map = new GMaps({
  div: '#maps',
  lat: 23.8748170,
  lng: 90.3899790,
  zoom: 13,
  styles: [
    {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
    {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
    {elementType: 'labels.text.fill', stylers: [{color: '#fff'}]},
    {
      featureType: 'administrative.locality',
      elementType: 'labels.text.fill',
      stylers: [{color: '#fff'}]
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [{color: '#d59563'}]
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [{color: '#263c3f'}]
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [{color: '#3c3c3c'}]
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [{color: '#000'}]
    },
    {
      featureType: 'road',
      elementType: 'geometry.stroke',
      stylers: [{color: '#212a37'}]
    },
    {
      featureType: 'road',
      elementType: 'labels.text.fill',
      stylers: [{color: '#9ca5b3'}]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [{color: '#3c3c3c'}]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [{color: '#3c3c3c'}]
    },
    {
      featureType: 'road.highway',
      elementType: 'labels.text.fill',
      stylers: [{color: '#3c3c3c'}]
    },
    {
      featureType: 'transit',
      elementType: 'geometry',
      stylers: [{color: '#2f3948'}]
    },
    {
      featureType: 'transit.station',
      elementType: 'labels.text.fill',
      stylers: [{color: '#000'}]
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [{color: '#3d3d3d'}]
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [{color: '#515c6d'}]
    },
    {
      featureType: 'water',
      elementType: 'labels.text.stroke',
      stylers: [{color: '#3c3c3c'}]
    }
  ]
});
map.drawOverlay({
  lat: map.getCenter().lat(),
  lng: map.getCenter().lng(),
  content: '<div class="overlay"><i class="icofont icofont-location-pin"></i></div>',
  verticalAlign: 'top',
  horizontalAlign: 'center'
});


// fixed top navbar  //
$(window).scroll(function(){
    var headerSection = $('header');

    if ($(window).scrollTop() > 100) {
        headerSection.addClass('header-top-fixed');
    } else {
        headerSection.removeClass('header-top-fixed');
    }
});


// preloader function
$(window).on("load", function() {
    var preLoder = $(".preloader");
    preLoder.fadeOut(1000);
});

// smooth scroll function 
$('header ul li a').on("click", function (e) {
    e.preventDefault();
    var anchor = $(this).attr('href');
    var top = $(anchor).offset().top;
    $('html, body').animate({
        scrollTop: $(anchor).offset().top
    }, 1000);
});