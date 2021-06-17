/*global $, window*/

$(function () {
    
    'use strict';
    
    var mySlider = $('.slider'),
		
		scrollButton = $("#scroll-top");
    
    // Trigger The Bx Slider
    
    mySlider.bxSlider({
        
        pager: false,
        
        slideMargin: 10,
        
        touchEnabled: false,
		
		auto: true,
		
		stopAutoOnClick: true,
		
		minSlides: 3,
		
		maxSlides: 3
        
    });
	
	// Trigger The ScrollTop Button
	
	$(window).scroll(function () {
        
        if ($(this).scrollTop() >= 700) {
        
            scrollButton.show();
        
        } else {
        
            scrollButton.hide();
        
        }
       
    });
    
    // Click On Button To Scroll Top
   
    scrollButton.click(function () {
        
        $("html,body").animate({scrollTop : 0}, 600);
    
    });
	
	// Trigger Nice Scroll
    
    $('html').niceScroll({
        
        cursorcolor: '#007bff',
        
        cursorwidth: '10px',
        
        cursorborder: '1px solid #007bff',
        
        cursorborderradius: 0,
		
		horizrailenabled: false
        
    });
	
	// Show Menu When Click On The Button
    
    $(".fa-bars").click(function () {
        
        $(".header .menu .links").slideToggle();
        
    });
       
});