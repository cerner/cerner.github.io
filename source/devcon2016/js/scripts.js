(function(){ 
	'use strict'
	var currentDay;
	var orignalImageSizes = {};

	//register click event handlers
	var init = function() {
		$( "#nav li" ).on( "click", function() {
			if(!$(this).hasClass("inactive")){
				showHideContent(this);
			}
		});

		$(".header h1").on("click", function() {
			showInstructions()
		});

		$(window).on("resize", function(){
			resizeImage();
		})
	};

	var showHideContent = function(e) {
		currentDay = $(e).data().day;
		console.log($(e).text() + " - " + currentDay);
		$("section.body").hide();
		$("section.image").show();
		$(".image img").hide();
		$("[data-day='" + currentDay +"']").show();
		resizeImage();
		$( "#nav li" ).removeClass("selected");
		$(e).addClass("selected");
		history.pushState(null, null, currentDay + ".html");
	};

	var resizeImage = function() {
		var $image = $("img[data-day='" + currentDay +"']");
		if(!orignalImageSizes.hasOwnProperty(currentDay)) {
			orignalImageSizes[currentDay] = {height: $image.height(), width: $image.width()};
		}
		var imageSize = calculateAspectRatioFit(orignalImageSizes[currentDay].width, orignalImageSizes[currentDay].height,
			$(window).width(), orignalImageSizes[currentDay].height);
		$image.css({width:imageSize.width, height:imageSize.height});
	};

	var showInstructions = function() {
		currentDay = null;

		$( "#nav li" ).removeClass("selected");
		$("section.image").hide();
		$("section.body").hide();
		$("section.instructions").show();
	};

	/**
	  * Conserve aspect ratio of the orignal region. Useful when shrinking/enlarging
	  * images to fit into a certain area.
	  *
	  * @param {Number} srcWidth Source area width
	  * @param {Number} srcHeight Source area height
	  * @param {Number} maxWidth Fittable area maximum available width
	  * @param {Number} maxHeight Fittable area maximum available height
	  * @return {Object} { width, heigth }
  	*/
	var calculateAspectRatioFit = function(srcWidth, srcHeight, maxWidth, maxHeight) {

	    var ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);

	    return { width: srcWidth*ratio, height: srcHeight*ratio };
	}

	init();
})();