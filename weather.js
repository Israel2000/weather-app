$(document).ready(function (){

	$('#submitWeather').click(function(){

		var city= $("#city").val();

		if (city !="#city") {

			$.ajax({

				url:'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric" + "&APPID=98fdeb0b4c2c1cde3b0f5a65c9a93b5f",
				type: "GET",
				dataType: "jsonp",
				success: function(data){
					console.log(data);
//					var widget = show(data);

//					$("#show").html(widget);

//					$("#city").val('');

				}

			});

		}else{
			$("#error").html('Field cannont be empty');
		}
	});
});

//function show(data){
//	return "<h2 style> Current Weather for " + data.name +"," + data.sys.country +"</h2>"+ 
//		   "<h3><strong>Weather</strong>: "+ data.weather[0].main +"</h3>" +
//		   "<h3><strong>Description</strong>: "+ data.weather[0].description +"</h3>" +
//		   "<h3><strong>Pressure</strong>: "+ data.main.pressure +"</h3>"+
//		   "<h3><strong>humidity</strong>: "+ data.main.humidity +"</h3>"+
//		   "<h3><strong>Min. Temperature</strong>: "+ data.main.temp_min +"</h3>"+
//		   "<h3><strong>Max. Temperature</strong>: "+ data.main.temp_max +"</h3>"+
//		   "<h3><strong>Wind Speed</strong>: "+ data.wind.speed +"</h3>"+
//		   "<h3><strong>Direction</strong>: "+ data.wind.deg +"</h3>"+


//}