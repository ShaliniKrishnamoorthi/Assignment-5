/*
Assignment 5 : Pop-up and JQuery UI
Author : Shalini Krishnamoorthi
File Name : popup.js
Version 1 : 02/13/2015
*/

$(document).ready(function(){
	console.log("entry");

	function getTime(){
		var date = new Date();
		var time = date.getHours()+':'+
			   	   date.getMinutes()+":"+
			       date.getSeconds();
		console.log(time);
		$("#time").val(time);
		return time;
	}

	/*display timer on screen*/
	var myVar = setInterval(function () {getTime()}, 1000);

	/*** Progress bar widget*****/
	$("#progressbar").progressbar({
		value:0,
		change: function () {
        	$("#progress-label").text($("#progressbar").progressbar("value") + "%");
      	},
      	complete: function () {
        	$("#progress-label").text("Complete!");
      	}
	});
	
   	/* Set interval for progress bar to align with screen timeout*/
	var progress = setInterval(function(){
		var val = $("#progressbar").progressbar("value");
		$("#progressbar").progressbar("value", val + 10);
		setTimeout(function(){
		 	clearTimeout(progress);
 		}, 10000);
	},1000);
  	
  	/*** Pop-up box show*****/
  	var int = setInterval(function(){
		$('#widget_page').find('input').attr('disabled',true); /*disable input*/
		$("#pop-up").show();
	}, 10000);

	/*** Pop-up box button events *****/
	$("#leaveButton").click(function(evt){
		$('#widget_page').find('input').attr('disabled',false); /*enable inputs*/
		$("#pop-up").hide(); 
		$(location).attr('href','http://www.google.com');
	}); /* Leave button end*/
	
	$("#stayButton").click(function() {
		$('#widget_page').find('input').attr('disabled',false); /*enable all inputs until as user wants to stay*/
		$("#pop-up").hide(); 
		
		/* restart timer as user wants to stay */
  		clearInterval(int);
  		int = setInterval(function(){
  			$('#widget_page').find('input').attr('disabled',true); /*disable all inputs until pop-up is closed*/
  			$("#pop-up").show();
    	}, 10000);	

    	/* restart the progress bar */
    	$("#progressbar").progressbar({value:0});
    	var progress = setInterval(function(){
			var val = $("#progressbar").progressbar("value");
			$("#progressbar").progressbar("value", val + 10);

			setTimeout(function(){
		 		clearTimeout(progress);
 			}, 10000);			
		},1000); 

	}); /* Stay button end*/

	/* // Use this if u don't want the prompt after some time 
	setTimeout(function(){
		console.log("finaltimeout");
		clearTimeout(int);
	}, 30000);
	*/

	/*** Accordion UI widget *****/
	$('#accordion').accordion();

	/* event handler for radio button choices*/
	$("input[name=background]").click(function(evt){		
		var color = $('input[name=background]:checked').val();
		document.body.bgColor = color;
	});	

	$("input[name=prompt]").click(function(evt){		
		var color = $('input[name=prompt]:checked').val();
		$("#pop-up").css({ 'background-color': color });
	});	

	$("input[name=progress]").click(function(evt){		
		var color = $('input[name=progress]:checked').val();
		 $("#progressbar").css({ 'background': color });
	});	

	/*** Datepicker UI widget *****/
	$( "#datepicker" ).datepicker();

});