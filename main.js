/*
auskommentieren
*/

let step = 0;
let addStep = 1;


(function($){
  
	$(document).mousemove(function(e){
		$("#mouse").css({left:e.pageX, top:e.pageY});
	});

	let hase = false;

	$('#schaf').on('click', function(){


		step = step + addStep;

		if (step > 32) {
			step = 0;
		}

	   	if(step === 0){
	   		if(hase){
	   			$(this).attr('src', 'img/angora-rabbit.png');
	   		}
	   		else{
	   			$(this).attr('src', 'img/schaf.png');
	   		}
	   	}

	   	else if (step === 8){
	   		if(hase){
	   			$(this).attr('src', 'img/angora-rabbit_2.png');
	   		}
	   		else{
	   		$(this).attr('src', 'img/schaf_2.png');
	   		}
	   	}
	   		
	   	else if (step === 16){
	   		if(hase){
	   			$(this).attr('src', 'img/angora-rabbit_3.png');
	   		}
	   		else{
	   		$(this).attr('src', 'img/schaf_3.png');
	   		}
	   	}

	   	else if (step === 24){
	   		if(hase){
	   			$(this).attr('src', 'img/angora-rabbit_4.png');
	   		}
	   		else{
	   		$(this).attr('src', 'img/schaf_4.png');
	   		}
	   	}

	   	else if (step === 32){
	   		if(hase){
	   			$(this).attr('src', 'img/angora-rabbit.png');
	   		}
	   		else{
	   		$(this).attr('src', 'img/schaf.png');
	   		}
	   	}   	

	});







	let cookie = document.getElementById("cookie")
	let counter = document.getElementById("counter")



	let points = 0;

	let clicker = function(e) {

		var multiply = 1;
		var shaverfull = document.getElementById("mouse").src;
		var shaver = shaverfull.replace(/^.*[\\\/]/, '');

		//define shaver muliplicator
		if(shaver == 'shave-2.png'){
			multiply = 10;
		}
		else if(shaver == 'shave-3.png'){
			multiply = 100;
		}

		if(hase === true){
			multiply = 500;
		}


		//count points and multiply by shaver
		points = points + (1 * multiply) ;


		if (points >= 400) {
			$(".shop").addClass("over50")
		}



		if (points >= 3650) {
			$(".shop").addClass("over100")
		}


		if (points >= 35200) {
			$(".shop").addClass("over2000")
		}



		
		counter.innerHTML = points;


	}
	cookie.addEventListener("click", clicker);
	// CLICKER FUNCTION FINITO


	//sound
	$("#sound.off").on('click', function(){
		if($(this).hasClass('off')){
			$(this).css('background-image', 'url("img/2000px-Speaker_Icon.png")');
			$(this).removeClass('off');
			$('audio').trigger('play');
		}
		else{
			$(this).css('background-image', 'url("img/Mute_Icon.png")');
			$(this).addClass('off');
			$('audio').trigger('pause');
		}
		console.log($(this));
	});


	//angora hase
	$("#angora").on('click', function(){
		$(".angora").hide()
		points = points - 35200 ;
	 	counter.innerHTML = points;
	 	hase = true;

	 	document.getElementById("schaf").src="img/angora-rabbit.png";
	 	$('#schaf').addClass('hase');

	 });



	let shaver = document.getElementById("shaver")

	let clickShaver = function(e) {
		points = points - 400 ;
		addStep = 2;
		counter.innerHTML = points;

		document.getElementById("mouse").src="img/shave-2.png";
		$(".gillette4000").hide()
	}

	shaver.addEventListener("click", clickShaver);





	let razor = document.getElementById("razor")

	let clickRazor = function(e) {
		points = points - 3650 ;
		addStep = 8;
		counter.innerHTML = points;

		document.getElementById("mouse").src="img/shave-3.png";
		$(".oneblade").hide()
	}

	razor.addEventListener("click", clickRazor);


})(jQuery);
