$(document).ready(function(){
	
	$("img").hide();

    $("h2").click(function(){
        $("p").slideToggle();
		$("body").css("background-color", "lightblue") ;
		$("img").show();
    });
	
	
});