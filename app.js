/* jshint esversion:6 */
/* globals $, document */

var svgPort = (function () {
	'use strict';

	var DOM = {},
	works = [{
		imageUrl: "assets/Simon.jpg",
		ipadUrl: "assets/simon_ipad.png",
		iphoneUrl: "assets/simon_iphone.png",
		title: "Simon",
		descrip: "Classic 1980s game",
    codepen: "https://codepen.io/LaerTrech/pen/GNGaJy"
	}, {
		imageUrl: "assets/tictactoe.png",
		ipadUrl: "assets/tictactoe_ipad.png",
		iphoneUrl: "assets/tictactoe_iphone.png",
		title: "Tic-Tac-Toe",
		descrip: "Choose X or O. Play against another human or AI.",
    codepen: "https://codepen.io/LaerTrech/pen/XNNxEE"
	}, {
		imageUrl: "assets/twitch.png",
		ipadUrl: "assets/twitch_ipad.png",
		iphoneUrl: "assets/twitch_iphone.png",
		title: "freecodeCamp on Twitch",
		descrip: "Uses Twitch.tv JSON API to display fCC and other users' stream activity",
    codepen: "https://codepen.io/LaerTrech/pen/yJgYxB"
	}, {
		imageUrl: "assets/Wiki.jpg",
		ipadUrl: "assets/wiki_ipad.png",
		iphoneUrl: "assets/wiki_iphone.png",
		title: "Wikipedia Viewer",
		descrip: "Uses Wikipedia's API to allow user to search for articles or click button to display random article",
    codepen: "https://codepen.io/LaerTrech/pen/zBrWzW"
	}, {
		imageUrl: "assets/quote_laptop.png",
		ipadUrl: "assets/quote_ipad.png",
		iphoneUrl: "assets/quote_iphone.png",
		title: "Random Quote Generator",
		descrip: "Generate and tweet random quote from list of rock-star-themed and unusual quotes I curated",
    codepen: "https://codepen.io/LaerTrech/pen/YWKbvw"
	}, {
		imageUrl: "assets/Pomodoro.jpg",
		ipadUrl: "assets/pomo_ipad.png",
		iphoneUrl: "assets/pomo_iphone.png",
		title: "Pomodoro Clock",
		descrip: "Work and break session timer",
    codepen: "https://codepen.io/LaerTrech/pen/xEawZR"
	}, {
		imageUrl: "assets/Calc.jpg",
		ipadUrl: "assets/calc_ipad.png",
		iphoneUrl: "assets/calc_iphone.png",
		title: "JavaScript Calculator",
		descrip: "With mysterious, otherworldly aesthetic",
    codepen: "https://codepen.io/LaerTrech/pen/gwZAVQ"
	}, {
		imageUrl: "assets/Weather.jpg",
		ipadUrl: "assets/purplerain_ipad.png",
		iphoneUrl: "assets/purplerain_iphone.png",
		title: "Purple Rain Every Day",
		descrip: "Prince-themed weather app with Dark Sky API, background image changes depending on conditions",
    codepen: "https://codepen.io/LaerTrech/pen/RRPxaZ"
	}, {
		imageUrl: "assets/focust.png",
		ipadUrl: "assets/focustipad.png",
		iphoneUrl: "assets/focust_iphone.png",
		title: "Focust",
		descrip: "Productivity app with to-do and shopping lists and work and break session timer; I also designed logo"
	}];

	function cacheDom() {
		DOM.$main = $('#port-main');
	}

	// generate laptop/iphone/ipad SVG with inner raster images
   function generateDevices(work) {
      var devices = `<svg width="60%" viewBox="0 0 897 452" xmlns="http://www.w3.org/2000/svg"> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="IPAD" transform="translate(681.000000, 55.000000)" stroke="#7E89A3"> <path d="M202.986,317 L12.097,317 C5.462,317 0.083,311.623 0.083,304.99 L0.083,12.093 C0.083,5.46 5.461,0.083 12.097,0.083 L202.986,0.083 C209.622,0.083 215,5.46 215,12.093 L215,304.99 C215,311.623 209.622,317 202.986,317 Z" id="bezel" stroke-width="2" fill="#FDFDFD"></path> <path d="M202.986,317 L12.097,317 C5.462,317 0.083,311.623 0.083,304.99 L0.083,12.093 C0.083,5.46 5.461,0.083 12.097,0.083 L202.986,0.083 C209.622,0.083 215,5.46 215,12.093 L215,304.99 C215,311.623 209.622,317 202.986,317 Z" id="bezel-2" stroke-width="2" fill="#FDFDFD"></path> <rect id="screen" fill="#FFFFFF" x="17" y="32" width="181.999" height="252.917"></rect> <image xlink:href="${work.ipadUrl}" x="17" y="33" width="181" height="251" preserveAspectRatio="xMidYMid slice"></image> <circle id="lock" cx="108.021" cy="300.021" r="8.021"></circle> <circle id="camera" cx="106.99" cy="16.99" r="2.99"></circle> </g> 
                  <g id="Laptop" transform="translate(1.000000, 1.000000)" stroke="#8492A5"> <path d="M594,0 L98,0 C84.50415,0 73,11.0738184 73,24.7901127 L73,351.027995 L619,351.027985 L619,24.7901127 C618.999971,11.0728209 607.537479,0 594,0 Z" id="bezel" stroke-width="2" fill="#FEFEFE"></path> <circle id="webcam" stroke-width="2" cx="347" cy="19" r="4"></circle> <g id="bottom" transform="translate(0.000000, 351.000000)"> <path d="M640.812,31.01 L51.288,31.01 C20.641,31.01 0,20.494 0,16.022 L0,2.428 C0,1.084 1.335,0 2.995,0 L689.104,0 C690.766,0 692.103,1.084 692.103,2.428 L692.103,16.557 C692.096,20.092 676.112,31.01 640.812,31.01 Z" id="Shape" stroke-width="2" fill="#FDFDFD"></path> <path d="M0.5,14.5 L690.242676,14.5" id="Line" stroke-linecap="square"></path> </g> <rect id="screen" fill="#FFFFFF" x="95" y="39" width="501.073853" height="292.009"></rect> <image xlink:href="${work.imageUrl}" x="96" y="40" width="499.073853" height="290.009" preserveAspectRatio="xMidYMid slice"></image> <path d="M421,352 L421,355.087 C421,357.288 416.666719,357.952714 413.386719,357.952714 L278.815286,357.952714 C275.364286,357.952714 271,357.289 271,355.087 L271,352" id="touchpad" fill="#FFFFFF"></path> </g> 
                  <g id="iphone" transform="translate(700.000000, 177.000000)" stroke="#7E89A3"> <path d="M130,257.964 C130,266.797 122.809,273.956 113.938,273.956 L16.063,273.956 C7.192,273.956 0.001,266.797 0.001,257.964 L0.001,16.073 C0.001,7.24 7.192,0.081 16.063,0.081 L113.938,0.081 C122.809,0.081 130,7.24 130,16.073 L130,257.964 L130,257.964 Z" id="bezel" stroke-width="2" fill="#FDFDFD"></path> <rect id="screen" fill="#FFFFFF" x="9" y="36" width="111.93" height="199.084"></rect> <image xlink:href="${work.iphoneUrl}" x="12" y="38" width="105" height="199" preserveAspectRatio="xMidYMid slice"></image> <path d="M77,25.746 C77,26.381 76.561,26.893 76.02,26.893 L55.918,26.893 C55.376,26.893 54.938,26.38 54.938,25.746 L54.938,23.166 C54.938,22.531 55.377,22.019 55.918,22.019 L76.02,22.019 C76.561,22.019 77,22.532 77,23.166 L77,25.746 L77,25.746 Z" id="speaker"></path> <circle id="camera" cx="66" cy="12" r="3"></circle> <ellipse id="lock" cx="65.04" cy="254.001" rx="10.04" ry="10.001"></ellipse> </g> </g> </svg>
            <div id="work">
            <h4>${work.title}</h4>
            <p>${work.descrip}</p>
            <a href="${work.codepen}"><p>Code</p></a>
            </div>`;
      
      return devices;
   }

   function render() {

      works.forEach(function(work) {

         DOM.$main
            .append(generateDevices(work));
      });

   }

   // public init method
    function init() {
        cacheDom();
        render();
    }
    
    
    // return public methods
    return {
        init: init
    };

})();

$(document).ready(function () {
    
  // load modules via public methods
  svgPort.init();

  // other page body behavior
  $('.navbar').hide();
  $('h2').hide().fadeIn(4000);
  $('.social, .row').hide().fadeIn(5000);
  
  $('#projects').click(function() {
    $('html, body').animate({
        scrollTop: $("#portfolio").offset().top
    }, 1000);
    $('.navbar').show();
    $('.navbar-brand').show();
    location.href = "#portfolio";
  });
  
  $('#user').click(function(){
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1000);
    $('.navbar').show();
    $('.navbar-brand').show();
    location.href = "#about";
  });
  
  $('.navbar-brand').click(function(){
    $('html, body').animate({
        scrollTop: $("#heading").offset().top
    }, 1000);
    $('.navbar').hide();
    $('.navbar-brand').hide();
    location.href = "#heading";
  });

   /*$('.portlink').click(function(){
    $('html, body').animate({
        scrollTop: $("#portfolio").offset().top
    }, 1000);
  });
  
  $('.aboutlink').click(function(){
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1000);
  });*/
    
});