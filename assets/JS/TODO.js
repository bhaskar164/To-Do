
//Line Throught and tick
$("ul").on("click","li",function () {
		$(this).toggleClass("completed");
		if($(this).find("img").attr("src") ==="")
			{$(this).find("img").attr("src","assets/img_icon/tick-icon.gif");}
		else{
			$(this).find("img").attr("src","");

		}
});


// Deleting To-Do's

$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();});
	  event.stopPropagation();

});



//Adding TO_DO's

$("input[type='text']").on("keypress", function(event){
	if(event.which === 13){
		newTodo = $("input").val();
		newTodo = "<li><span><i class=\"fa fa-trash\"></i></span> "+newTodo+"<img src=></li>";
		$("ul").append(newTodo);
		$("input").val("");
		event.stopPropagation();		
	} 
});

//Hiding todo writepad
var hide =false;
$("h1").on("click","i",function(){
	$("input").fadeToggle();
});