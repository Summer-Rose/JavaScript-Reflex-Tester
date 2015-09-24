$(document).ready(function() {
	var clickedTime;
	var newBoxTime;
	var reationTime;
	Date.now();
	function newBox() {
		newBoxTime = Date.now();
		var time = Math.random() * 5000;
		setTimeout(function() {
			document.getElementById("box").style.display="block";
		}, time);
	}

	document.getElementById("box").onclick=function() {
		clickedTime = Date.now();
		reactionTime = (clickedTime - newBoxTime)/1000;
		this.style.display="none";
		newBox();
	};
	newBox();

});