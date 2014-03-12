(function($) {
// JavaScript Document
$(document).ready(function() {

	/*global $:false */
	var obert=false;

	$('ul.slideshow li').addClass('ocult');
	$('ul.slideshow li:first-child').removeClass('ocult').addClass('visi');

	function mostra(){
		if(!$('.slideshow .visi').next().length){
			$('.slideshow .visi').removeClass('visi').addClass('ocult');
			$('ul.slideshow li:first-child').removeClass('ocult').addClass('visi');
		}else{
			$('.slideshow .visi').removeClass('visi').addClass('ocult').next().removeClass('ocult').addClass('visi');
		}
	}

	// ----------- FREEBIES IPHONE SLIDESHOW ----------- //
	var i=0;
	var timer=null;

	function start(){
		timer = setInterval(function() {mostra(i);}, 4000);
	}

	start();

	// ----------- MAIN MENU ----------- //

	$(".menubtn").mouseenter(function() {
			$(this).stop().animate({scrollTop:23},'fast');
	});

	$(".menubtn").mouseleave(function() {
			$(this).stop().animate({scrollTop:0},'fast');
	});


	// ----------- TEAM NEXT/PREV ----------- //

	var y=0;

	$(".dir-right").click(function() {
		if(!$(this).hasClass('disable-2')){
			$(".jump"+(y+1)).click();
		}
	});

	$(".dir-left").click(function() {
		if(!$(this).hasClass('disable')){
			$(".jump"+(y-1)).click();
		}
	});

	var teams = $('.team li');
	var dotsul = '';
	teams.each(function (index) {
		if (index===0){dotsul = '<ul class="dotsmenu">';}
		dotsul += '<li class="dots jump' + index + '" id="' + index + '"></li>';
		if (index===teams.length-1) {
			dotsul += '</ul>';
			$('.team').after(dotsul);
		}
	});
	// ----------- TEAM DOTS ----------- //


	$(".dots").click(function() {
			$(".teamshow").stop().animate({scrollLeft:pos[$(this).attr('id')]},'slow');
			$('.activo').removeClass('activo');
			$(this).addClass('activo');
			y=parseInt($(this).attr('id'),10);

			if(y===0){$('.dir-left').addClass('disable');}else{$('.dir-left').removeClass('disable');}

			if(y==maxpages-1){$('.dir-right').addClass('disable-2');}else{$('.dir-right').removeClass('disable-2');}
			
			
/*
			if(tamany>2){
				if(y===2){$('.dir-right').addClass('disable-2');}else{$('.dir-right').removeClass('disable-2');}
			}else
			if(tamany===2){
				if(y===4){$('.dir-right').addClass('disable-2');}else{$('.dir-right').removeClass('disable-2');}
			}else
			if(tamany===1){
				if(y===8){$('.dir-right').addClass('disable-2');}else{$('.dir-right').removeClass('disable-2');}
			}*/
			
			
	});

	var res= null;
	var tamany= null;
	var pos= null;
	var old= null;
	var elements = teams.length;
	var maxpages = null;
	recalcul();
	
	$('.teamlist').css('width', elements*410)

	$(window).bind("resize", function(){
		old=tamany;
		recalcul();
		if(old!==tamany){
			$(".jump0").click();
			if(obert===true){obre($actual.attr('id'));}
		}
		Move('.paraOn');
	});

	function recalcul(){
		res=$(window).width();
		pos = [];
		if (res > 959) { tamany=4; epp=3; maxpages=Math.ceil(elements/epp); for (i=0;i<maxpages;i++){pos[i]=i*900;};} else
		if (res > 767) { tamany=3; epp=3; maxpages=Math.ceil(elements/epp); for (i=0;i<maxpages;i++){pos[i]=i*720;}; } else
		if (res > 479) { tamany=2; epp=2; maxpages=Math.ceil(elements/epp); for (i=0;i<maxpages;i++){pos[i]=i*462;};} else
		if (res < 480) { tamany=1; epp=1; maxpages=Math.ceil(elements/epp); for (i=0;i<maxpages;i++){pos[i]=i*231;}; }
	}

// ----------- PROJECT WINDOW SHOW/HIDE ----------- //

	var $actual= null;

	$(".ch-grid").click(function() {
			obre($(this).attr('id'));
			$actual=$(this);
			$('html,body').animate({scrollTop:($('#works').position().top)+165}, 1000);
	});


	function obre(quin){
	$.ajax({
		//type: "POST",
		//data: { id: $(this).attr('cid')},
		url: quin,
		success: function(data) {

		//per calcular la alçada per animar
        var $newHTML  = $('<div class="dummy" style="position : absolute; left : -9999px;">' + data + '</div>').appendTo('body'),
            theHeight = $newHTML.height();

			$('.project-content').css('height',theHeight);
            $('.dummy').remove();
			$('.project-content').html(data);
			tanca();
			dots();
			canvia();
			if( obert===false){$(".project-window").slideDown("slow");}
			obert=true;
		}
	});
	}


	function tanca(){

		$(".close").click(function() {
			$(".project-window").slideUp("slow");
			obert=false;
		});

	}


	function seguent(){
		if($actual.parent().next().hasClass('final')){
			$actual=$($('.inici').next().children('.ch-grid'));
		}else{
			$actual=$($actual.parent().next().children('.ch-grid'));
		}

		if($actual.parent().hasClass('isotope-hidden')){
			seguent();
		}else{
			obre($actual.attr('id'));
		}
	}

	function enrera(){
		if($actual.parent().prev().hasClass('inici')){
			$actual=$($('.final').prev().children('.ch-grid'));
		}else{
			$actual=$($actual.parent().prev().children('.ch-grid'));
		}

		if($actual.parent().hasClass('isotope-hidden')){
			enrera();
		}else{
			obre($actual.attr('id'));
		}
	}

	function canvia(){

		$('.btn-next').click(function() {
			seguent();
		});
		$('.btn-prev').click(function() {
			enrera();
		});
	}


	// ----------- PORTFOLIO DOTS ----------- //
	function dots(){

	$(".jump12").click(function() {
			$(".img-project").stop().animate({scrollLeft:0},'slow');
			$('.activo2').removeClass('activo2');
			$(this).addClass('activo2');
	});

	$(".jump22").click(function() {
			$(".img-project").stop().animate({scrollLeft:694},'slow');
			$('.activo2').removeClass('activo2');
			$(this).addClass('activo2');
	});

	$(".jump32").click(function() {
			$(".img-project").stop().animate({scrollLeft:1388},'slow');
			$('.activo2').removeClass('activo2');
			$(this).addClass('activo2');
	});

	$(".jump42").click(function() {
			$(".img-project").stop().animate({scrollLeft:2082},'slow');
			$('.activo2').removeClass('activo2');
			$(this).addClass('activo2');
	});
	$(".jump52").click(function() {
			$(".img-project").stop().animate({scrollLeft:2776},'slow');
			$('.activo2').removeClass('activo2');
			$(this).addClass('activo2');
	});
	$(".jump62").click(function() {
			$(".img-project").stop().animate({scrollLeft:3470},'slow');
			$('.activo2').removeClass('activo2');
			$(this).addClass('activo2');
	});

	$(".jump72").click(function() {
			$(".img-project").stop().animate({scrollLeft:4164},'slow');
			$('.activo2').removeClass('activo2');
			$(this).addClass('activo2');
	});
	$(".jump82").click(function() {
			$(".img-project").stop().animate({scrollLeft:4857},'slow');
			$('.activo2').removeClass('activo2');
			$(this).addClass('activo2');
	});
	}


	// ----------------- EASING ANCHORS ------------------ //

	$('a[href*=#]').click(function() {

     if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {

             var $target = $(this.hash);

             $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');

             if ($target.length) {

                 var targetOffset = $target.offset().top;

                 $('html,body').animate({scrollTop: targetOffset-100}, 1000);

                 return false;

            }

       }

   });

   //parallax

	$(window).bind("scroll", function(){//when the user is scrolling...
		Move('.paraOn'); //move the background images in relation to the movement of the scrollbar
	});

	function Move(seccio){
		$(seccio).each(function(){
			if($(this).attr('id')==='banner'){
				$(this).css('background-position', '50% '+$(window).scrollTop()/3+'px');
				
				if(res > 959){alt=795;}else
				if(res > 767){alt=700;}else
				if(res > 479){alt=550;}else
				if(res < 480){alt=450;}
				
				$(this).css('background-size','auto '+alt+'px');
				
			}else{
				$(this).css('background-position', '50% '+(($(window).scrollTop()+$(window).height()-$(this).attr('yPos'))/3+$(this).height())+'px');
				
				if(res > 959){alt=1000;}else
				if(res > 767){alt=900;}else
				if(res > 479){alt=700;}else
				if(res < 480){alt=500;}
				
				$(this).css('background-size','auto '+alt+'px');
			}
		});
	}

   //inview

   $('.parallax').bind('inview', function (event, visible) {
		if (visible === true) {
		// element is now visible in the viewport
		var offset = $(this).offset();
		$(this).addClass('paraOn').attr('yPos',offset.top);
		} else {
		// element has gone out of viewport
		$(this).removeClass('paraOn');
		}
});

});// JavaScript Document
})(jQuery);