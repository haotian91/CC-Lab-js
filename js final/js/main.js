var team = "";
var month = "";
var date = "";




//set team function
var setTeam = function(){

	//define the current team
	team = $(".team").val();
	month = $(".month").val();
	date = $(".date").val();


	
	getScore();

	if(team == null || team == ""){

		alert("you need to list a team!");
		return;

	}

};




//get score funciton
var getScore = function(){


var thisURL = "http://football-api.com/api/?Action=competitions&APIKey=8929efd6-3749-914d-e0d1cc61d522";
	console.log(thisURL);
	$.ajax({
		url : thisURL,
		dataType : "jsonp",
		success : function(response){
			loadScore(response);
			
		}

	});

};


//loadScore
var loadScore = function(response){
console.log(response);
	 if(response.response.error){
	 	alert(response.response.error.description);
	 	return;
	 };

	var thisTeam =matches.match_id;
	var score = matches.match_ht_score;
	var leftIcon = response.current_observation.icon_url;
	var rightIcon = response.current_observation.icon_url;

	console.log('the current weather in ' + thisCity + ' is '+ weather + 'with a temp of '+ temp );
	$('.score').text(score);
	$('.team').val(thisTeam);
	$('.leftIcon').html('<img src="' + icon + '">');
	$('.rightIcon').html('<img src="' + icon + '">');
};

//init

var init = function(){

	console.log("what\'s the score?");

	$("#submit").click(function(e){
		e.preventDefault();
		setTeam();
	});

};

$(document).ready(function(){

	init();

});