var about_button = document.getElementById('aboutButton');
var modal = document.getElementById('myModal');
var close = document.getElementById('myClose');
var content = document.getElementById('myContent');
var menu4 = document.getElementById('5');


 about_button.onmouseenter = function(){
 about_button.style.borderRadius = "2"
	setTimeout( about_button,1000);
}
 about_button.onmouseleave = function(){
	 about_button.style.borderRadius = "";
	setTimeout( about_button,1000);
}

menu4.onclick = function(){
	modal.style.display="block";
	setTimeout(opacity1,100);
}
close.onclick = function(){
	content.style.opacity="0";
	setTimeout(display,1000);
}
function opacity1(){
	content.style.opacity="1";
}
function display(){
	modal.style.display="none";
}
