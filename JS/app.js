(function main(){
	var compte = 0;

	$('.btn1').click(function(){
		var compte = $('.temps').val();
		var intervale = setInterval(timer,1000);

		function timer(){
			compte=compte-1;
			$(".rebour").html(compte);

			if(compte===0){
				clearInterval(intervale);

			$('.below').removeClass('showing').addClass('above');

			setTimeout(function(){
				$('.below').removeClass('.below').addClass('.showing');
			},400)
				
			setTimeout(function(){
		$('.above').removeClass('.above').addClass('.below');
			},600)

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