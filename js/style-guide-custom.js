/* globals $ */

/**
 * * * * * * * * * * * * * * * * * * * * *
 * Style Guide specific JavaScript CUSTOM
 * * * * * * * * * * * * * * * * * * * * *
 */

function getLocalStorageValue(key) {
	return window.localStorage.getItem(key);
}
function setLocalStorageValue(key, value) {
	window.localStorage.setItem(key, value);
}

function getPersistedStyle() {
  return getLocalStorageValue('persisted_style');
}

function setPersistedStyle(value) {
  setLocalStorageValue('persisted_style', value);
}

function getPersistedHtml() {
  return getLocalStorageValue('persisted_html');
}

function setPersistedHtml(value) {
  setLocalStorageValue('persisted_html', value);
}

/*
* LIVE SEARCH IN COMPONENTS
*/

jQuery(document).ready(function($) {
  $('.live-search-list li.c-lined-list__item').each(function(){
      $(this).attr('data-search-term', $(this).text().toLowerCase());
  });
   $('.live-search-box').on('keyup', function(){
     var searchTerm = $(this).val().toLowerCase();
     var hit = false;
     $('.no-results-element').hide(); // this element should have the text “Ingen treff”
     $('.live-search-list li.c-lined-list__item').each(function(){
         if ($(this).filter('[data-search-term *= ' + searchTerm + ']').length > 0 || searchTerm.length < 1) {
             $(this).show();
             $('.live-search-title').show();
             hit = true;
         } else {
             $(this).hide();
             $('.live-search-title').hide();
         }
     });
     if (hit === false) {
         $('.no-results-element').show();
     }
 });
});

/*
* LIVE SEARCH IN TEMPLATES
*/

jQuery(document).ready(function($) {
  $('.live-search-list-templates li').each(function(){
      $(this).attr('data-search-term', $(this).text().toLowerCase());
  });
   $('.live-search-box-templates').on('keyup', function(){
     var searchTerm = $(this).val().toLowerCase();
     var hit = false;
     $('.no-results-element').hide(); // this element should have the text “Ingen treff”
     $('.live-search-list-templates li').each(function(){
         if ($(this).filter('[data-search-term *= ' + searchTerm + ']').length > 0 || searchTerm.length < 1) {
             $(this).show();
             $('.live-search-title').show();
             hit = true;
         } else {
             $(this).hide();
             $('.live-search-title').hide();
         }
     });
     if (hit === false) {
         $('.no-results-element').show();
     }
 });
});



 /*!
 * TOGGLE navbar
 	+ hide the others
 	+ close when clicking outside of navbar
 */
 ;(function ($, undefined) {

     $(window).resize(function() {
         // This will fire each time the window is resized:
         if($(window).width() < 768) {
             // if larger or equal

             $('body .a-st-overlay').animate({
         			opacity: "0"
         		}, 200, function(){
         			$('body .a-st-overlay').remove();
         		});

             $(".a-st-expandable:visible").animate({
         			left: "-300px"
         		}, 200, function() {
         		});

             $(".a-st-toggleNavbar:visible").animate({
         			left: "0px"

         		}, 200, function() {
         		});
             $(".a-st-toggleNavbar").removeClass('open');
         } else {
           $(".a-st-expandable").animate({
     				left: "0"
     			}, 200, function() {
     				// Animation complete.
     			});
           $(".a-st-toggleNavbar").animate({
     				left: "280px"
     			}, 200, function() {
     				// Animation complete.
     			});
           $(".a-st-toggleNavbar").addClass('open');
         }
     }).resize(); // This will simulate a resize to trigger the initial run.

 	function openExpandable($element){
 		var expandable = "";

 		if($element.hasClass("a-st-toggleNavbar")){
 			expandable = ".a-st-navbar";
 		}

 		$element.addClass('open');

		$('.a-st-switchProject-link').animate({
 			opacity: "0"
 		}, 100, function() {

 		});

 		$('<div class="a-st-overlay"></div>').appendTo('body');

 		$('body .a-st-overlay').animate({
 			opacity: "0.6"
 		}, 200, function(){

 		});

 		if(expandable !== ""){
 			$(expandable+".a-st-expandable").animate({
 				left: "0"
 			}, 200, function() {
 				// Animation complete.
 			});
       $(".a-st-toggleNavbar").animate({
 				left: "280px"
 			}, 200, function() {
 				// Animation complete.
 			});
 		}
 	}

 	function closeExpandable($element){
 		$('body .a-st-overlay').animate({
 			opacity: "0"
 		}, 200, function(){
 			$('body .a-st-overlay').remove();
 		});

 	  $(".a-st-expandable:visible").animate({
 			left: "-300px"

 		}, 200, function() {

 		});

    $(".a-st-toggleNavbar:visible").animate({
 			left: "0px"

 		}, 200, function() {

 		});

 		$element.removeClass('open');

		$('.a-st-switchProject-link').animate({
 			opacity: "1"
 		}, 100, function() {

 		});
 	}

 	function addClickOutsideExpandableEvent(){
 		$(document).bind( "mouseup touchend", function(e){
 			if(!$(e.target).hasClass("a-st-toggleNavbar-expandable open")){
 				var $openExpandable = $(".a-st-expandable:visible");
 				var testClass = $(e.target).hasClass('.a-st-overlay');

 				if(testClass == true){
 					closeExpandable($("header .a-st-toggleNavbar-expandable.open"));
           $(".a-st-toggleNavbar").removeClass('open');
 				}
 			}

 			if($(e.target).hasClass('a-st-overlay') || $(e.target).hasClass('icon-cancel')){
 				closeExpandable($("header .a-st-toggleNavbar-expandable.open"));
         $(".a-st-toggleNavbar").removeClass('open');
 			}
 		});
 	}

 	$(function () {
 		addClickOutsideExpandableEvent();
 		$('.a-st-toggleNavbar-expandable').on('click touch', function () {
 			var self = $(this);

 			if (self.hasClass('open')) {
 				closeExpandable(self);
 			} else {
 				closeExpandable($("header .a-st-toggleNavbar-expandable.open"));
 				openExpandable(self);
 			}
 			return false;
 		})

 	});

 }(jQuery));
