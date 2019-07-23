$(document).ready(function() {

    /* FLECHE DE DEFILEMENT */
    $("#top").click(function(event) {
        event.preventDefault(); //Désactivation des propriétés du a
        $("html, body").animate({
            scrollTop: 0
        }, 900);
    });

    /* PORTFOLIO */
    $("#see_more").click(function(event) {
		$("#portfolio_more").show("slow");

		$("#see_less").css("display", "inline-block");
		$("#see_more").css("display", "none");
    });

    $("#see_less").click(function(event) {
		$("#portfolio_more").hide("slow");

		$("#see_more").css("display", "inline-block");
		$("#see_less").css("display", "none");
	});
});
