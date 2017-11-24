$(document).ready(function(){
	//alert("toto");

	/* FLECHE DE DEFILEMENT */
	$("#top").click(function(event){
		event.preventDefault(); //Désactivation des propriétés du a
		$("html, body").animate({
			scrollTop : 0
		}, 900);
	});
	
});