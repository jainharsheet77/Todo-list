// check off specific todos


$("ul").on("click","li",function(){ // add listener on ul... run code when li(the second argument) is clicked
	$(this).toggleClass("completed");
});

// click on X to delete Todos;
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();	// .parent() gives the parent as a jQery element
	});
		
	event.stopPropagation(); // to stop the event from bubbeling to the top all the way up to the html
});

$("input[type='text']").keypress(function(key){
	if(key.which===13)
	{
		var todoText=$(this).val();		// grabbing the value 
		$(this).val("");	// sets theinput to a blank
		var s="<li><span><i class='fas fa-trash'></i> </span>"+todoText+"</li>";
		$("ul").append(s);
	}

});
$(".fa-plus").on("click",function(){
	 $("input[type='text']").fadeToggle();
});