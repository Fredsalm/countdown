(function main(){

	var compte = 0;
	var $rebour = $('.rebour');

	$('.btn1').click(function(){
		var compte = $('.temps').val();
		var intervale = setInterval(timer,1000);

		function timer(){

			compte=compte-1;
			$rebour.html(compte);

			setTimeout(function(){
				$rebour.removeClass('showing').addClass('above');
			},800);
			

			setTimeout(function(){
				$rebour.removeClass('below').addClass('showing');
			},600);
		
			setTimeout(function(){

				$rebour.removeClass('above').addClass('below');

			},400);

			if(compte===0){
				clearInterval(intervale);

			}//fin if

		}//fin timer

		$('.stop').click(function(){

			clearInterval(intervale);

		});//click stop

		$('.play').click(function(){

			intervale = setInterval(timer,1000);

		});//click play

		$('.Clear').click(function(){

			clearInterval(intervale);

			$(".rebour").html('0');

			compte = $('.temps').val('');
		});

	});//fin click

})();//fin main